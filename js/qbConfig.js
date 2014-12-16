/* 
 * QuickBlox JavaScript SDK
 *
 * Configuration Module
 *
 */

var config = {
  creds: {
    appId: '',
    authKey: '',
    authSecret: ''
  },
  endpoints: {
    api: 'api.quickblox.com',
    chat: 'chat.quickblox.com',
    muc: 'muc.chat.quickblox.com',
    turn: 'turnserver.quickblox.com',
    s3Bucket: 'qbprod'
  },
  chatProtocol: {
    // bosh: 'http://chat.quickblox.com:5280',
    bosh: 'https://chat.quickblox.com:5281', // With SSL
    // websocket: 'ws://chat.quickblox.com:5290',
    websocket: 'wss://chat.quickblox.com:5291', // With SSL
    active: 1
  },
  iceServers: [
    /* QB servers */
    // {urls: "stun:stun.l.google.com:19302"},
    // {urls: "turn:turnserver.quickblox.com:3478?transport=udp", username: "", credential: ""},
    // {urls: "turn:turnserver.quickblox.com:3478?transport=tcp", username: "", credential: ""}

    /* Demo servers */
    {
      'url': 'stun:stun.l.google.com:19302'
    },
    {
      'url': 'turn:192.158.29.39:3478?transport=udp',
      'credential': 'JZEOEt2V3Qb0y27GRntt2u2PAYA=',
      'username': '28224511:1379330808'
    },
    {
      'url': 'turn:192.158.29.39:3478?transport=tcp',
      'credential': 'JZEOEt2V3Qb0y27GRntt2u2PAYA=',
      'username': '28224511:1379330808'
    }

    /* Bistri.com servers */
    // {
    //   "url": "stun:stun.l.google.com:19302"
    // },
    // {
    //   "url": "stun:stun.anyfirewall.com:3478"
    // },
    // {
    //   "url": "turn:turn.bistri.com:80",
    //   "credential": "homeo",
    //   "username": "homeo"
    // },
    // {
    //   "url": "turn:turn.anyfirewall.com:443?transport=tcp",
    //   "credential": "webrtc",
    //   "username": "webrtc"
    // },
    // {
    //   "url": "stun:turn2.xirsys.com"
    // },
    // {
    //   "username": "36b7fdaf-524e-4c38-a6d3-b174166fd573",
    //   "url": "turn:turn2.xirsys.com:443?transport=udp",
    //   "credential": "0371abb5-fa95-4bbe-b282-25e5888513f7"
    // },
    // {
    //   "username": "36b7fdaf-524e-4c38-a6d3-b174166fd573",
    //   "url": "turn:turn2.xirsys.com:443?transport=tcp",
    //   "credential": "0371abb5-fa95-4bbe-b282-25e5888513f7"
    // }
  ],
  urls: {
    session: 'session',
    login: 'login',
    users: 'users',
    chat: 'chat',
    blobs: 'blobs',
    geodata: 'geodata',
    places: 'places',
    pushtokens: 'push_tokens',
    subscriptions: 'subscriptions',
    events: 'events',
    data: 'data',
    type: '.json'
  },
  ssl: true,
  timeout: null,
  debug: false
};

config.set = function(options) {
  Object.keys(options).forEach(function(key) {
    if(key !== 'set' && config.hasOwnProperty(key)) {
      if(typeof options[key] !== 'object') {
        config[key] = options[key]
      } else {
        Object.keys(options[key]).forEach(function(nextkey) {
          if(config.hasOwnProperty(key))
            config[key][nextkey] = options[key][nextkey];
        });
      }
    }
  })
};

module.exports = config;
