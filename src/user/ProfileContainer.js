'use strict'

import React, {Component} from 'react'
import {
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux'
import ParallaxScrollView from 'react-native-parallax-scroll-view';

import F8Header from '../common/F8Header'
import F8Button from '../common/F8Button'
import {Heading3} from '../common/F8Text'
import {DetailStyles, PostStyles, General, Titles} from '../styles'
import ScrollableTabView from 'react-native-scrollable-tab-view'

import {BuildsPagerByUserId} from '../build'
import {PostsByUserId} from '../post'

import {  
  AddPost,
  BackSquare
} from '../components'

export default class ProfileContainer extends Component {
  render () {
    let {profileData, btnContent, userId, initial} = this.props
      , foregroundContent = profileData?(
        <View style={{flex: 1}}>
          <View style={DetailStyles.userInfoContainer}>
            <Image style={PostStyles.largeUserPhoto} source={{uri: profileData.picture}}/>
            <Text style={[DetailStyles.lightTitle, {backgroundColor: 'rgba(0,0,0,0.6)'}]}>{profileData.name}</Text>
          </View>
          <View style={{right: 8, position: 'absolute', bottom: 0}}>
          {btnContent}
          </View>
        </View>
      ):(<View/>)

    return (
      <ParallaxScrollView
        backgroundColor="transparent"
        contentBackgroundColor="white"
        backgroundSpeed={1}
        parallaxHeaderHeight={300}
        stickyHeaderHeight={64}
        renderForeground={()=>{return foregroundContent}}
        renderBackground={() => <Image source={require ('../common/img/r34.png')} style={DetailStyles.VRImageHolder}/>}
        renderFixedHeader={()=>{return initial?(<View/>):(<BackSquare/>)}}
        >
        <View style={{flex: 1, alignItems: 'center', flexDirection: 'column'}}>
        <BuildsPagerByUserId style={{flex: 1}} userId={userId}/>
        <Heading3 style={Titles.filterSectionTitle}>{"WALL"}</Heading3>
        <AddPost style={{flex: 1}}/>
        <PostsByUserId userId={userId}/>
        </View>
      </ParallaxScrollView>
    )
  }
}
