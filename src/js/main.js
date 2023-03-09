"use strict";

//Alpine JS and plugins import
import Alpine from "alpinejs"
import intersect from "@alpinejs/intersect"
import collapse from '@alpinejs/collapse';
import persist from "@alpinejs/persist";
import Iconify from '@iconify/iconify';

window.Alpine = Alpine
//Init intersect plugin
Alpine.plugin(intersect)
//Init persist plugin
Alpine.plugin(persist)
//Init collapse plugin
Alpine.plugin(collapse);
//Init store
Alpine.store("app", {
  init() {
    this.isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  },
  isDark: Alpine.$persist(false),
  isSidebarOpened: Alpine.$persist(false),
  isSidebarOpenedMobile: Alpine.$persist(false),
  activeSidebar: Alpine.$persist("dashboard"),
  activeSidebarMenu: Alpine.$persist(""),
  isPanelOpened: Alpine.$persist(false),
});
//Start Alpine JS
Alpine.start()

import { initVideoPlayers } from "./libs/components/player/player";
import { initMapBox } from "./libs/components/map/map";
import { insertBgImages } from "./libs/utils/utils";
import { initLazyLoading } from './libs/utils/lazyload';
import "./libs/demo";
import "./libs/components";

document.onreadystatechange = function () {
  if (document.readyState == "complete") {

    //Lazy Loading
    const lazy = initLazyLoading();

    //Switch backgrounds
    const changeBackgrounds = insertBgImages();

    //Init videos
    const players = initVideoPlayers();

    //Init maps
    const maps = initMapBox();
  }
};
