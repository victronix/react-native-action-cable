var ActionCable,Consumer;Consumer=require("./consumer"),ActionCable={INTERNAL:require("./internal"),WebSocket:window.WebSocket,logger:window.console,createConsumer:function(e){return new Consumer(this.createWebSocketURL(e),this.log,this.WebSocket)},createWebSocketURL:function(e){return e&&!/^wss?:/i.test(e)&&(e=e.replace("http","ws")),e},startDebugging:function(){return this.debugging=!0},stopDebugging:function(){return this.debugging=null},log:function(...e){if(ActionCable.debugging)return e.push(Date.now()),ActionCable.logger.log("[ActionCable]",...e)}},module.exports=ActionCable;