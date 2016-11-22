import React from 'react'
import {Scene, Actions, ActionConst} from 'react-native-router-flux'

import { General } from '../styles'
import { BuildDetails, BuildsListByPartId, BuildsListBySpecId, BuildsListByUserId } from '../build'
import { Parts, PartDetails, PartsByBuild, PartFilter, PartsByManufacturer } from '../part'
import { PostsByBuildId, PostsByUserId } from '../post' 
import { Makes, Models, Submodels, Specs } from '../picker'
import { Tuning, TuningBySpec, QRScreen } from '../tuning'
import { UserPage, Comments, Login, Home, MyBuilds, MyPosts, NewBuild, NewPost, NewPart, Notifications, Posts, PreviewBuild, PreviewPost, Saved, Settings } from '../user'
import { TabIcon, EditSpecs, PhotoSwiper} from '../components'
export default scenes = Actions.create (
  <Scene key="root">
    <Scene key="login" component={Login} title="Login" hideNavBar={true} />
    <Scene key="main" tabs={true} hideNavBar tabBarStyle={General.tabBarStyle}>
        <Scene title="Tuning" icon={TabIcon} key="tuning" component={Tuning} hideNavBar/>
        <Scene title="Profile" icon={TabIcon} key="home" component={Home} hideNavBar/>
    </Scene>
    <Scene key="QRScan" component={QRScreen} hideNavBar/>
    <Scene key="Saved" component={Saved} hideNavBar/>
    <Scene key="BuildDetails" component={BuildDetails} hideNavBar/>
    <Scene key="TuningBySpec" component={TuningBySpec} hideNavBar/>

    <Scene key="Parts" component={Parts} hideNavBar/>
    <Scene key="PartDetails" component={PartDetails} hideNavBar/>
    <Scene key="PartFilter" component={PartFilter} hideNavBar/>
    <Scene key="PartsByManufacturer" component={PartsByManufacturer} hideNavBar/>
    <Scene key="PartsByBuild" component={PartsByBuild} hideNavBar/>
    
    <Scene key="Makes" component={Makes} title="Makes" hideNavBar/>
    <Scene key="Models" type={ActionConst.REPLACE} component={Models} title="Models" hideNavBar/>
    <Scene key="Submodels" type={ActionConst.REPLACE} component={Submodels} title="Trims" hideNavBar/>
    <Scene key="Specs" type={ActionConst.REPLACE} component={Specs} title="Specs" hideNavBar/>

    <Scene key="NewPost" component={NewPost} hideNavBar/>
    <Scene key="NewBuild" component={NewBuild} hideNavBar/>
    <Scene key="NewPart" component={NewPart} hideNavBar/>
    <Scene key="PreviewBuild" component={PreviewBuild} hideNavBar/>
    <Scene key="PreviewPost" component={PreviewPost} hideNavBar/>
    <Scene key="EditSpecs" component={EditSpecs} hideNavBar/>

    <Scene key="BuildsByUserId" component={BuildsListByUserId} hideNavBar/>
    <Scene key="BuildsByPartId" component={BuildsListByPartId} hideNavBar/>
    <Scene key="BuildsBySpecId" component={BuildsListBySpecId} hideNavBar/>

    <Scene key="PostsByBuildId" component={PostsByBuildId} hideNavBar/>
    <Scene key="PostsByUserId" component={PostsByUserId} hideNavBar/>

    <Scene key="UserPage" component={UserPage} hideNavBar/>
    <Scene key="PhotoSwiper" component={PhotoSwiper} hideNavBar/>
  </Scene>
)
