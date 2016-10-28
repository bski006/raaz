'use strict'

import React, {Component} from 'react'
import {
  View,
  ListView,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native'

import F8Header from '../common/F8Header'
import {LoadingView, ErrorView} from '../components'
import MultipleChoice from 'react-native-multiple-choice'
import keys from 'lodash/keys'
import { FilterStyles } from '../styles'

import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { addSpecToHistory } from '../reducers/history/historyActions'
import { setSpecId } from '../reducers/car/filterActions'

const mapStateToProps = (state) => {
  let specIds = keys(state.entities.specs).sort(),
      specs = specIds.map ((id)=>state.entities.specs[id])

  return {
    specs,
    userId: state.user.profileData.user_id,

    selectedMake: state.car.selectedMake,
    selectedModel: state.car.selectedModel,
    selectedSubmodel: state.car.selectedSubmodel,

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedSpecId: (specId) => {
      dispatch (setSpecId (specId))
    },
    addSpecToHistory: (selectedMake, selectedModel, selectedSubmodel, specId) => {
      dispatch (addSpecToHistory (selectedMake, selectedModel, selectedSubmodel, specId))
    }
  }
}
class SpecsList extends Component {
  _innerRef: ?PureListView;

  constructor (props) {
    super (props)
    this.state = {
      specs: props.specs,
      isFetching: true,
    }
  }

  componentWillMount () {
    let {specs, isFetching} = this.props
    this.setState ({specs, isFetching: true})
  }


  componentWillReceiveProps (nextProps) {
    let {specs} = nextProps,
        isFetching = specs.length?false:true
    this.setState ({specs, isFetching})
  }

  render () {
    let {specs, isFetching} = this.state,
        {addSpecToHistory, userId, setSelectedSpecId,
        selectedMake, selectedModel, selectedSubmodel} = this.props
    const leftItem = {
            title: 'Back',
            onPress: ()=>Actions.pop(),
          },
    content = isFetching?(<LoadingView/>):(
                <ScrollView style={FilterStyles.optionsContainer}>
                  <MultipleChoice
                    maxSelectedOptions={1}
                    renderText={(option)=> {
                        let {
                         cylinders, compressor, configuration,
                         transmissionSpeed, transmission, drivenWheels,size,
                         specId, horsepower
                         } = option
                        return (
                          <TouchableOpacity onPress={()=>{
                            setSelectedSpecId (specId)
                            addSpecToHistory (selectedMake, selectedModel, selectedSubmodel, option)
                            Actions.TuningBySpec ({specId: specId})
                          }}>
                          <Text style={FilterStyles.multipleChoiceText}>
                            { `${horsepower} HP ` + size.toFixed(1) + ` L ${configuration}-${cylinders} ${compressor}`}
                          </Text>
                          </TouchableOpacity>
                        )
                    }}
                    options={this.state.specs}
                    selectedOptions={[]}
                    renderSeparator={(option)=>{return (<View/>)}}
                    renderIndicator={(option)=>{return (<View/>)}}/>
                </ScrollView>
              )
    return (
      <View style={FilterStyles.container}>
        <F8Header
          foreground="dark"
          title={"Specs"}
          leftItem={leftItem}
          style={FilterStyles.headerStyle}/>
          {content}
      </View>
    )
  }
}

export default connect (mapStateToProps, mapDispatchToProps) (SpecsList)
