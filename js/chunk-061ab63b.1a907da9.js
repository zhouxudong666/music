(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-061ab63b"],{"0f0a":function(t,e,s){"use strict";var a=s("4fb2"),i=s.n(a);i.a},"20e9":function(t,e,s){"use strict";var a=s("bda3"),i=s.n(a);i.a},2508:function(t,e,s){"use strict";var a=s("c19a"),i=s.n(a);i.a},2726:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cover-row",class:{"without-padding":t.withoutPadding},style:t.rowStyles},t._l(t.items,(function(e){return s("div",{key:e.id,staticClass:"item",class:{artist:"artist"===t.type}},[s("Cover",{attrs:{imageUrl:t.getImageUrl(e),type:t.type,id:e.id}}),s("div",{staticClass:"text"},[t.showPlayCount?s("div",{staticClass:"info"},[s("span",{staticClass:"play-count"},[s("svg-icon",{attrs:{"icon-class":"play"}}),t._v(t._s(t._f("formatPlayCount")(e.playCount))+" ")],1)]):t._e(),s("div",{staticClass:"title",style:{fontSize:t.subTextFontSize}},[t.isExplicit(e)?s("span",{staticClass:"explicit-symbol"},[s("ExplicitSymbol")],1):t._e(),t.isPrivacy(e)?s("span",{staticClass:"lock-icon"},[s("svg-icon",{attrs:{"icon-class":"lock"}})],1):t._e(),s("router-link",{attrs:{to:t.getTitleLink(e)}},[t._v(t._s(e.name))])],1),"artist"!==t.type&&"none"!==t.subText?s("div",{staticClass:"info"},[s("span",{domProps:{innerHTML:t._s(t.getSubText(e))}})]):t._e()])],1)})),0)},i=[],r=(s("a4d3"),s("e01a"),s("99af"),s("b0c0"),s("a9e3"),s("ac1f"),s("1276"),s("3020")),o=s("0c94"),n={name:"CoverRow",components:{Cover:r["a"],ExplicitSymbol:o["a"]},props:{items:{type:Array,required:!0},type:{type:String,required:!0},subText:{type:String,default:"null"},subTextFontSize:{type:String,default:"16px"},showPlayCount:{type:Boolean,default:!1},columnNumber:{type:Number,default:5},gap:{type:String,default:"44px 24px"},withoutPadding:{type:Boolean,default:!1}},computed:{rowStyles:function(){return{"grid-template-columns":"repeat(".concat(this.columnNumber,", 1fr)"),gap:this.gap}}},methods:{getSubText:function(t){if("copywriter"===this.subText)return t.copywriter;if("description"===this.subText)return t.description;if("updateFrequency"===this.subText)return t.updateFrequency;if("creator"===this.subText)return"by "+t.creator.nickname;if("releaseYear"===this.subText)return new Date(t.publishTime).getFullYear();if("artist"===this.subText){if(void 0!==t.artist)return'<a href="/#/artist/'.concat(t.artist.id,'">').concat(t.artist.name,"</a>");if(void 0!==t.artists)return'<a href="/#/artist/'.concat(t.artists[0].id,'">').concat(t.artists[0].name,"</a>")}if("albumType+releaseYear"===this.subText){var e=t.type;return"EP/Single"===t.type?e=1===t.size?"Single":"EP":"Single"===t.type?e="Single":"专辑"===t.type&&(e="Album"),"".concat(e," · ").concat(new Date(t.publishTime).getFullYear())}return"appleMusic"===this.subText?"by Apple Music":void 0},isPrivacy:function(t){return"playlist"===this.type&&10===t.privacy},isExplicit:function(t){return"album"===this.type&&1056768===t.mark},getTitleLink:function(t){return"/".concat(this.type,"/").concat(t.id)},getImageUrl:function(t){if(t.img1v1Url){var e=t.img1v1Url.split("/");if(e=e[e.length-1],"5639395138885805.jpg"===e)return"https://p2.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg?param=512y512"}var s=t.img1v1Url||t.picUrl||t.coverImgUrl;return"".concat(s,"?param=512y512")}}},l=n,c=(s("2508"),s("2877")),u=Object(c["a"])(l,a,i,!1,null,"20835ae4",null);e["a"]=u.exports},"2c46":function(t,e,s){"use strict";var a=s("862d"),i=s.n(a);i.a},3020:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cover",class:{"cover-hover":t.coverHover},on:{mouseover:function(e){t.focus=!0},mouseleave:function(e){t.focus=!1},click:function(e){t.clickCoverToPlay?t.play():t.goTo()}}},[s("div",{staticClass:"cover-container"},[s("div",{staticClass:"shade"},[s("button",{directives:[{name:"show",rawName:"v-show",value:t.focus,expression:"focus"}],staticClass:"play-button",style:t.playButtonStyles,on:{click:function(e){return e.stopPropagation(),t.play()}}},[s("svg-icon",{attrs:{"icon-class":"play"}})],1)]),s("img",{style:t.imageStyles,attrs:{src:t.imageUrl}}),t.coverHover||t.alwaysShowShadow?s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.focus||t.alwaysShowShadow,expression:"focus || alwaysShowShadow"}],staticClass:"shadow",style:t.shadowStyles})]):t._e()],1)])},i=[],r=(s("a9e3"),{props:{id:{type:Number,required:!0},type:{type:String,required:!0},imageUrl:{type:String,required:!0},fixedSize:{type:Number,default:0},playButtonSize:{type:Number,default:22},coverHover:{type:Boolean,default:!0},alwaysShowPlayButton:{type:Boolean,default:!0},alwaysShowShadow:{type:Boolean,default:!1},clickCoverToPlay:{type:Boolean,default:!1},shadowMargin:{type:Number,default:12},radius:{type:Number,default:12}},data:function(){return{focus:!1}},computed:{imageStyles:function(){var t={};return 0!==this.fixedSize&&(t.width=this.fixedSize+"px",t.height=this.fixedSize+"px"),"artist"===this.type&&(t.borderRadius="50%"),t},playButtonStyles:function(){var t={};return t.width=this.playButtonSize+"%",t.height=this.playButtonSize+"%",t},shadowStyles:function(){var t={};return t.backgroundImage="url(".concat(this.imageUrl,")"),"artist"===this.type&&(t.borderRadius="50%"),t}},methods:{play:function(){var t=this.$store.state.player,e={album:t.playAlbumByID,playlist:t.playPlaylistByID,artist:t.playArtistByID};e[this.type].bind(t)(this.id)},goTo:function(){this.$router.push({name:this.type,params:{id:this.id}})}}}),o=r,n=(s("2c46"),s("2877")),l=Object(n["a"])(o,a,i,!1,null,"f1a38860",null);e["a"]=l.exports},"4fb2":function(t,e,s){},"5e45":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{class:t.color,style:t.buttonStyle},[null!==t.iconClass?s("svg-icon",{style:{marginRight:t.iconButton?"0px":"8px"},attrs:{iconClass:t.iconClass}}):t._e(),t._t("default")],2)},i=[],r=(s("a9e3"),{name:"ButtonTwoTone",props:{iconClass:{type:String,default:null},iconButton:{type:Boolean,default:!1},horizontalPadding:{type:Number,default:16},color:{type:String,default:"blue"},backgroundColor:{type:String,default:""},textColor:{type:String,default:""},shape:{type:String,default:"square"}},computed:{buttonStyle:function(){var t={borderRadius:"round"===this.shape?"50%":"8px",padding:"8px ".concat(this.horizontalPadding,"px"),width:"round"===this.shape?"38px":"auto"};return""!==this.backgroundColor&&(t.backgroundColor=this.backgroundColor),""!==this.textColor&&(t.color=this.textColor),t}}}),o=r,n=(s("0f0a"),s("2877")),l=Object(n["a"])(o,a,i,!1,null,"18f7e8ba",null);e["a"]=l.exports},"66db":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"artist"},[s("div",{staticClass:"artist-info"},[s("div",{staticClass:"head"},[s("img",{attrs:{src:t._f("resizeImage")(t.artist.img1v1Url,1024)}})]),s("div",{staticClass:"info"},[s("div",{staticClass:"name"},[t._v(t._s(t.artist.name))]),s("div",{staticClass:"artist"},[t._v(t._s(t.$t("artist.artist")))]),s("div",{staticClass:"statistics"},[s("a",{on:{click:function(e){return t.scrollTo("popularTracks")}}},[t._v(t._s(t.artist.musicSize)+" "+t._s(t.$t("common.songs")))]),t._v(" · "),s("a",{on:{click:function(e){return t.scrollTo("seeMore","start")}}},[t._v(t._s(t.artist.albumSize)+" "+t._s(t.$t("artist.withAlbums")))]),t._v(" · "),s("a",{on:{click:function(e){return t.scrollTo("mvs")}}},[t._v(t._s(t.artist.mvSize)+" "+t._s(t.$t("artist.videos")))])]),s("div",{staticClass:"buttons"},[s("ButtonTwoTone",{attrs:{iconClass:"play"},nativeOn:{click:function(e){return t.playPopularSongs()}}},[t._v(" "+t._s(t.$t("common.play"))+" ")]),s("ButtonTwoTone",{attrs:{color:"grey"},nativeOn:{click:function(e){return t.followArtist(e)}}},[t.artist.followed?s("span",[t._v(t._s(t.$t("artist.following")))]):s("span",[t._v(t._s(t.$t("artist.follow")))])])],1)])]),s("div",{staticClass:"latest-release"},[s("div",{staticClass:"section-title"},[t._v(t._s(t.$t("artist.latestRelease")))]),s("div",{staticClass:"release"},[s("div",{staticClass:"container"},[s("Cover",{attrs:{imageUrl:t._f("resizeImage")(t.latestRelease.picUrl),type:"album",id:t.latestRelease.id,fixedSize:128,playButtonSize:30}}),s("div",{staticClass:"info"},[s("div",{staticClass:"name"},[s("router-link",{attrs:{to:"/album/"+t.latestRelease.id}},[t._v(t._s(t.latestRelease.name))])],1),s("div",{staticClass:"date"},[t._v(" "+t._s(t._f("formatDate")(t.latestRelease.publishTime))+" ")]),s("div",{staticClass:"type"},[t._v(" "+t._s(t._f("formatAlbumType")(t.latestRelease.type,t.latestRelease))+" · "+t._s(t.latestRelease.size)+" "+t._s(t.$t("common.songs"))+" ")])])],1),s("div")])]),s("div",{staticClass:"popular-tracks",attrs:{id:"popularTracks"}},[s("div",{staticClass:"section-title"},[t._v(t._s(t.$t("artist.popularSongs")))]),s("TrackList",{attrs:{tracks:t.popularTracks.slice(0,t.showMorePopTracks?24:12),type:"tracklist"}}),s("div",{staticClass:"show-more",attrs:{id:"seeMore"}},[s("button",{on:{click:function(e){t.showMorePopTracks=!t.showMorePopTracks}}},[s("span",{directives:[{name:"show",rawName:"v-show",value:!t.showMorePopTracks,expression:"!showMorePopTracks"}]},[t._v(t._s(t.$t("artist.showMore")))]),s("span",{directives:[{name:"show",rawName:"v-show",value:t.showMorePopTracks,expression:"showMorePopTracks"}]},[t._v(t._s(t.$t("artist.showLess")))])])])],1),0!==t.albums.length?s("div",{staticClass:"albums",attrs:{id:"albums"}},[s("div",{staticClass:"section-title"},[t._v(t._s(t.$t("artist.albums")))]),s("CoverRow",{attrs:{type:"album",items:t.albums,subText:"releaseYear",showPlayButton:!0}})],1):t._e(),0!==t.mvs.length?s("div",{staticClass:"mvs",attrs:{id:"mvs"}},[s("div",{staticClass:"section-title"},[t._v("MVs "),s("router-link",{directives:[{name:"show",rawName:"v-show",value:t.hasMoreMV,expression:"hasMoreMV"}],attrs:{to:"/artist/"+this.artist.id+"/mv"}},[t._v(t._s(t.$t("home.seeMore")))])],1),s("MvRow",{attrs:{mvs:t.mvs,subtitle:"publishTime"}})],1):t._e(),0!==t.eps.length?s("div",{staticClass:"eps"},[s("div",{staticClass:"section-title"},[t._v(t._s(t.$t("artist.EPsSingles")))]),s("CoverRow",{attrs:{type:"album",items:t.eps,subText:"albumType+releaseYear",showPlayButton:!0}})],1):t._e(),0!==t.similarArtists.length?s("div",{staticClass:"similar-artists"},[s("div",{staticClass:"section-title"},[t._v("相似艺人")]),s("CoverRow",{attrs:{type:"artist",columnNumber:6,gap:"36px 28px",items:t.similarArtists.slice(0,12)}})],1):t._e()])},i=[],r=(s("4de4"),s("caad"),s("d81d"),s("d3b7"),s("25f0"),s("f3f3")),o=s("2f62"),n=s("512b"),l=s("5f87"),c=s("323e"),u=s.n(c),d=s("5e45"),p=s("a1a1"),v=s("2726"),h=s("3020"),m=s("d4e3"),f={name:"Artist",components:{Cover:h["a"],ButtonTwoTone:d["a"],TrackList:p["a"],CoverRow:v["a"],MvRow:m["a"]},data:function(){return{show:!1,artist:{img1v1Url:"https://p1.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg"},popularTracks:[],albumsData:[],latestRelease:{picUrl:"",publishTime:0,id:0,name:"",type:"",size:""},showMorePopTracks:!1,mvs:[],hasMoreMV:!1,similarArtists:[]}},computed:Object(r["a"])(Object(r["a"])({},Object(o["d"])(["player"])),{},{albums:function(){return this.albumsData.filter((function(t){return"专辑"===t.type}))},eps:function(){return this.albumsData.filter((function(t){return["EP/Single","EP","Single"].includes(t.type)}))}}),methods:Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(o["c"])(["appendTrackToPlayerList"])),Object(o["b"])(["playFirstTrackOnList","playTrackOnListByID"])),{},{loadData:function(t){var e=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;Object(n["c"])(t).then((function(t){e.artist=t.artist,e.popularTracks=t.hotSongs,void 0!==s&&s(),u.a.done(),e.show=!0})),Object(n["d"])({id:t,limit:200}).then((function(t){e.albumsData=t.hotAlbums,e.latestRelease=t.hotAlbums[0]})),Object(n["a"])({id:t}).then((function(t){e.mvs=t.mvs,e.hasMoreMV=t.hasMore})),Object(n["e"])(t).then((function(t){e.similarArtists=t.artists}))},goToAlbum:function(t){this.$router.push({name:"album",params:{id:t}})},playPopularSongs:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"first",e=this.popularTracks.map((function(t){return t.id}));this.$store.state.player.replacePlaylist(e,this.artist.id,"artist",t)},followArtist:function(){var t=this;Object(l["b"])()?Object(n["b"])({id:this.artist.id,t:this.artist.followed?0:1}).then((function(e){200===e.code&&(t.artist.followed=!t.artist.followed)})):this.showToast("此操作需要登录网易云账号")},scrollTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"center";document.getElementById(t).scrollIntoView({behavior:"smooth",block:e})}}),created:function(){this.loadData(this.$route.params.id)},activated:function(){this.show&&this.artist.id.toString()!==this.$route.params.id&&(this.show=!1,u.a.start(),this.loadData(this.$route.params.id))},beforeRouteUpdate:function(t,e,s){u.a.start(),this.artist.img1v1Url="https://p1.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg",this.loadData(t.params.id,s)}},y=f,b=(s("73e2"),s("2877")),g=Object(b["a"])(y,a,i,!1,null,"b36d2fda",null);e["default"]=g.exports},"73e2":function(t,e,s){"use strict";var a=s("b1bb"),i=s.n(a);i.a},"862d":function(t,e,s){},b1bb:function(t,e,s){},bda3:function(t,e,s){},c19a:function(t,e,s){},d4e3:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mv-row",class:{"without-padding":t.withoutPadding}},t._l(t.mvs,(function(e){return s("div",{key:t.getID(e),staticClass:"mv"},[s("div",{staticClass:"cover",on:{mouseover:function(s){t.hoverVideoID=t.getID(e)},mouseleave:function(e){t.hoverVideoID=0},click:function(s){t.goToMv(t.getID(e))}}},[s("img",{attrs:{src:t.getUrl(e)}}),s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.hoverVideoID===t.getID(e),expression:"hoverVideoID === getID(mv)"}],staticClass:"shadow",style:{background:"url("+t.getUrl(e)+")"}})])],1),s("div",{staticClass:"info"},[s("div",{staticClass:"title"},[s("router-link",{attrs:{to:"/mv/"+t.getID(e)}},[t._v(t._s(t.getTitle(e)))])],1),s("div",{staticClass:"artist",domProps:{innerHTML:t._s(t.getSubtitle(e))}})])])})),0)},i=[],r=(s("99af"),s("b0c0"),s("ac1f"),s("5319"),{name:"CoverVideo",props:{mvs:Array,subtitle:{type:String,default:"artist"},withoutPadding:{type:Boolean,default:!1}},data:function(){return{hoverVideoID:0}},methods:{goToMv:function(t){var e={};void 0!==this.$parent.player&&(e={autoplay:this.$parent.player.playing}),this.$router.push({path:"/mv/"+t,query:e})},getUrl:function(t){var e,s,a=null!==(e=null!==(s=t.imgurl16v9)&&void 0!==s?s:t.cover)&&void 0!==e?e:t.coverUrl;return a.replace(/^http:/,"https:")+"?param=464y260"},getID:function(t){return void 0!==t.id?t.id:void 0!==t.vid?t.vid:void 0},getTitle:function(t){return void 0!==t.name?t.name:void 0!==t.title?t.title:void 0},getSubtitle:function(t){if("artist"===this.subtitle){var e="null",s=0;return void 0!==t.artistName?(e=t.artistName,s=t.artistId):void 0!==t.creator&&(e=t.creator[0].userName,s=t.creator[0].userId),'<a href="/#/artist/'.concat(s,'">').concat(e,"</a>")}if("publishTime"===this.subtitle)return t.publishTime}}}),o=r,n=(s("20e9"),s("2877")),l=Object(n["a"])(o,a,i,!1,null,"71b4f1ff",null);e["a"]=l.exports}}]);
//# sourceMappingURL=chunk-061ab63b.1a907da9.js.map