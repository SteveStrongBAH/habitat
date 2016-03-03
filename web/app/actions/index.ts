// Copyright:: Copyright (c) 2016 Chef Software, Inc.
//
// The terms of the Evaluation Agreement (Bldr) between Chef Software Inc. and the party accessing
// this file ("Licensee") apply to Licensee's use of the Software until such time that the Software
// is made available under an open source license such as the Apache 2.0 License.

import * as gitHubRepoActions from "./gitHubRepos";
import * as notificationActions from "./notifications";
import * as orgActions from "./orgs";
import * as packageActions from "./packages";
import * as projectActions from "./projects";
import * as routerActions from "./router";
import * as userActions from "./user";

// Action types
export const POPULATE_GITHUB_REPOS = gitHubRepoActions.POPULATE_GITHUB_REPOS;
export const SET_SELECTED_GITHUB_ORG = gitHubRepoActions.SET_SELECTED_GITHUB_ORG;

export const ADD_NOTIFICATION = notificationActions.ADD_NOTIFICATION;
export const REMOVE_NOTIFICATION = notificationActions.REMOVE_NOTIFICATION;

export const POPULATE_ORG = orgActions.POPULATE_ORG;

export const POPULATE_EXPLORE = packageActions.POPULATE_EXPLORE;
export const SET_CURRENT_PACKAGE = packageActions.SET_CURRENT_PACKAGE;
export const SET_PACKAGES = packageActions.SET_PACKAGES;
export const SET_VISIBLE_PACKAGES = packageActions.SET_VISIBLE_PACKAGES;

export const APPEND_TO_BUILD_LOG = projectActions.APPEND_TO_BUILD_LOG;
export const FINISH_BUILD_STREAM = projectActions.FINISH_BUILD_STREAM;
export const POPULATE_BUILDS = projectActions.POPULATE_BUILDS;
export const POPULATE_BUILD_LOG = projectActions.POPULATE_BUILD_LOG;
export const POPULATE_PROJECT = projectActions.POPULATE_PROJECT;
export const SET_CURRENT_PROJECT = projectActions.SET_CURRENT_PROJECT;
export const SET_PROJECTS = projectActions.SET_PROJECTS;

export const ROUTE_CHANGE = routerActions.ROUTE_CHANGE;
export const ROUTE_REQUESTED = routerActions.ROUTE_REQUESTED;

export const SIGN_IN_ATTEMPT = userActions.SIGN_IN_ATTEMPT;
export const SIGN_UP_ATTEMPT = userActions.SIGN_UP_ATTEMPT;
export const SIGN_OUT = userActions.SIGN_OUT;
export const TOGGLE_USER_NAV_MENU = userActions.TOGGLE_USER_NAV_MENU;

// Actions
export const fetchGitHubRepos = gitHubRepoActions.fetchGitHubRepos;
export const onGitHubRepoSelect = gitHubRepoActions.onGitHubRepoSelect;
export const setSelectedGitHubOrg = gitHubRepoActions.setSelectedGitHubOrg;

export const addNotification = notificationActions.addNotification;
export const removeNotification = notificationActions.removeNotification;

export const addOrg = orgActions.addOrg;

export const fetchExplore = packageActions.fetchExplore;
export const fetchPackage = packageActions.fetchPackage;
export const filterPackagesBy = packageActions.filterPackagesBy;
export const populateExplore = packageActions.populateExplore;
export const setCurrentPackage = packageActions.setCurrentPackage;
export const setPackages = packageActions.setPackages;
export const setVisiblePackages = packageActions.setVisiblePackages;

export const addProject = projectActions.addProject;
export const fetchBuilds = projectActions.fetchBuilds;
export const fetchProject = projectActions.fetchProject;
export const fetchProjects = projectActions.fetchProjects;
export const populateBuildLog = projectActions.populateBuildLog;
export const setCurrentProject = projectActions.setCurrentProject;

export const routeChange = routerActions.routeChange;
export const requestRoute = routerActions.requestRoute;

export const attemptSignIn = userActions.attemptSignIn;
export const attemptSignUp = userActions.attemptSignUp;
export const toggleUserNavMenu = userActions.toggleUserNavMenu;
export const signOut = userActions.signOut;