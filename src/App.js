import './App.css';
import RChat from './RChat';
import {Button, Configuration, Icon} from '@pega/cosmos-react-core';
import { useState } from 'react';


const messages = [
  {
    "id": "4276065002",
    "type": "system",
    "message": "John brown has joined",
    "timeStamp": "01:44 PM"
  },
  {
    "id": "88365643",
    "type": "message",
    "variant": "sender",
    "direction": "out",
    "avatarInfo": {
      "name": "John Brown"
    },
    "message": "Hi, Welcome to u-plus. How can I help you ?",
    "timeStamp": "1:44 PM",
    "status": "Opened",
    "attachments": [
      {
        "id": "2499167340",
        "name": "Location",
        "icon": "document",
        "meta": "PNG 0.1 MB",
        "thumbnail": "https://pegasystems.github.io/uplus-wss/health_provider/img/secondary-options.jpg"
      },
      {
        "id": "2499167341",
        "name": "FAQ with detailed terms and conditions of the policy",
        "icon": "document-pdf",
        "meta": "PDF 0.7 MB"
      }
    ],
    "ariaLabel": "John Brown said  Hi, Welcome to u-plus. How can I help you ? at 1:44 PM with 2 attachments"
  },
  {
    "id": "3245595973",
    "type": "message",
    "variant": "sender",
    "direction": "out",
    "avatarInfo": {
      "name": "John Brown"
    },
    "message": "You may also reach us via",
    "timeStamp": "1:45 PM",
    "pagePushLinks": [
      {
        "id": "2499167349",
        "href": "https://collaborate.pega.com/",
        "thumbnail": "https://community.pega.com/sites/default/files/styles/480/public/media/images/2020-02/AskExpert.png?itok=ef2MVbOV",
        "title": "Ask the expert"
      }
    ],
    "ariaLabel": "John Brown said  You may also reach us via at 1:45 PM with 1 link"
  },
  {
    "id": "3865379335",
    "type": "message",
    "variant": "receiver",
    "messagePrivacy": "PUBLIC TWEET",
    "direction": "in",
    "avatarInfo": {
      "name": "Sara Connor"
    },
    "message": "Hi, I would like to know the validity of my policy",
    "ariaLabel": "Sara Connor said  Hi, I would like to know the validity of my policy via Public Tweet"
  },
  {
    "id": "777315059",
    "type": "message",
    "variant": "receiver",
    "messagePrivacy": "PUBLIC TWEET",
    "direction": "in",
    "avatarInfo": {
      "name": "Sara Connor"
    },
    "message": "Could you please help",
    "timeStamp": "1:45 PM",
    "ariaLabel": "Sara Connor said  Could you please help at 1:45 PM via Public Tweet"
  },
  {
    "id": "4001121034",
    "type": "system",
    "message": "Alan Trefler has joined"
  },
  {
    "id": "779591083",
    "type": "message",
    "variant": "other",
    "direction": "in",
    "avatarInfo": {
      "name": "Alan Trefler",
      "imageSrc": "https://pbs.twimg.com/profile_images/824369446798106628/_biA5GRt_400x400.jpg"
    },
    "message": "Great, our CSR will help you with that",
    "timeStamp": "1:46 PM",
    "status": "Delivered",
    "ariaLabel": "Alan Trefler said  Great, our CSR will help you with that at 1:46 PM"
  },
  {
    "id": "2683629622",
    "type": "message",
    "variant": "sender",
    "messagePrivacy": "PUBLIC REPLY",
    "direction": "out",
    "avatarInfo": {
      "name": "John Brown"
    },
    "message": "Sure",
    "timeStamp": "1:48 PM",
    "status": "Delivered",
    "ariaLabel": "John Brown said  Sure at 1:48 PM via Public Tweet"
  },
  {
    "id": "2748689942",
    "type": "message",
    "variant": "other",
    "direction": "in",
    "avatarInfo": {
      "name": "Alan Trefler",
      "imageSrc": "https://pbs.twimg.com/profile_images/824369446798106628/_biA5GRt_400x400.jpg"
    },
    "message": " Carry on",
    "timeStamp": "1:49 PM",
    "attachments": [
      {
        "id": "2499167343",
        "name": "Departments mapping",
        "icon": "document-doc",
        "meta": "PDF 0.1 MB"
      }
    ],
    "ariaLabel": "Alan Trefler said   Carry on at 1:49 PM with 1 attachment"
  },
  {
    "id": "4110947991",
    "type": "message",
    "variant": "other",
    "direction": "in",
    "messagePrivacy": "PUBLIC REPLY",
    "avatarInfo": {
      "name": "Alan Trefler",
      "imageSrc": "https://pbs.twimg.com/profile_images/824369446798106628/_biA5GRt_400x400.jpg"
    },
    "message": " Refer these documents for more FAQ",
    "timeStamp": "1:49 PM",
    "attachments": [
      {
        "id": "2499167345",
        "name": "FAQ with detailed terms and conditions of the policy",
        "icon": "document-doc",
        "meta": "PDF 0.7 MB"
      },
      {
        "id": "2499167346",
        "name": "Privacy policy",
        "icon": "document-doc",
        "meta": "WORD 0.1 MB"
      }
    ],
    "ariaLabel": "Alan Trefler said   Refer these documents for more FAQ at 1:49 PM with 2 attachments via Public Tweet"
  },
  {
    "id": "2549273884",
    "type": "system",
    "message": "Alan Trefler has left"
  },
  {
    "id": "3375453344",
    "type": "message",
    "variant": "sender",
    "messagePrivacy": "PUBLIC REPLY",
    "direction": "out",
    "avatarInfo": {
      "name": "John Brown"
    },
    "message": "Could you please help me with your account num",
    "timeStamp": "1:50 PM",
    "attachments": [
      {
        "id": "2499167347",
        "name": "Security policy",
        "icon": "document-pdf",
        "meta": "PDF 6.1 MB"
      }
    ],
    "ariaLabel": "John Brown said  Could you please help me with your account num at 1:50 PM with 1 attachment via Public Tweet"
  },
  {
    "id": "1868448522",
    "type": "message",
    "variant": "receiver",
    "direction": "in",
    "avatarInfo": {
      "name": "Sara Connor"
    },
    "message": "Yeah, sure please give me a second",
    "ariaLabel": "Sara Connor said  Yeah, sure please give me a second "
  },
  {
    "id": "1295058543",
    "type": "message",
    "variant": "receiver",
    "direction": "in",
    "avatarInfo": {
      "name": "Sara Connor"
    },
    "message": "5588-8899-45-89",
    "timeStamp": "1:50 PM",
    "attachments": [
      {
        "id": "2499167348",
        "name": "Vehicle insurance",
        "icon": "document-doc",
        "meta": "WORD 1.1 MB"
      }
    ],
    "ariaLabel": "Sara Connor said  5588-8899-45-89 at 1:50 PM with 1 attachment"
  },
  {
    "id": "2690247642",
    "type": "message",
    "variant": "sender",
    "direction": "out",
    "avatarInfo": {
      "name": "John Brown"
    },
    "message": "Let me pick your details",
    "status": "Delivered",
    "ariaLabel": "John Brown said  Let me pick your details "
  },
  {
    "id": "1208949065",
    "type": "message",
    "variant": "sender",
    "direction": "out",
    "avatarInfo": {
      "name": "John Brown"
    },
    "message": "Can I please transfer your chat request to concerned department please ?",
    "timeStamp": "1:51 PM",
    "ariaLabel": "John Brown said  Can I please transfer your chat request to concerned department please ? at 1:51 PM"
  },
  {
    "id": "4302656892",
    "type": "message",
    "variant": "receiver",
    "direction": "in",
    "avatarInfo": {
      "name": "Sara Connor"
    },
    "message": "Sure",
    "timeStamp": "1:51 PM",
    "ariaLabel": "Sara Connor said  Sure at 1:51 PM"
  },
  {
    "id": "658052414",
    "type": "message",
    "variant": "sender",
    "direction": "out",
    "avatarInfo": {
      "name": "John Brown"
    },
    "message": "Please give me a moment",
    "timeStamp": "1:51 PM",
    "ariaLabel": "John Brown said  Please give me a moment at 1:51 PM"
  },
  {
    "id": "719933419",
    "type": "system",
    "message": "Mike has joined"
  },
  {
    "id": "679831597",
    "type": "message",
    "variant": "sender",
    "direction": "out",
    "message": "Hi Sara. This is Mike. John has discussed with me. I will be helping you out with the required details",
    "timeStamp": "1:51 PM",
    "ariaLabel": "You said Hi Sara. This is Mike. John has discussed with me. I will be helping you out with the required details at 1:51 PM"
  },
  {
    "id": "2785439809",
    "type": "system",
    "message": "John brown has left"
  },
  {
    "id": "85859690",
    "type": "message",
    "variant": "sender",
    "direction": "out",
    "message": "Ok, your insurance is valid until Dec 21, 2020 11:00 AM",
    "timeStamp": "1:52 PM",
    "ariaLabel": "You said Ok, your insurance is valid until Dec 21, 2020 11:00 AM at 1:52 PM"
  },
  {
    "id": "2484793043",
    "type": "message",
    "variant": "receiver",
    "direction": "in",
    "avatarInfo": {
      "name": "Sara Connor"
    },
    "message": "Thanks",
    "timeStamp": "1:52 PM",
    "ariaLabel": "Sara Connor said  Thanks at 1:52 PM"
  },
  {
    "id": "352967030",
    "type": "message",
    "variant": "sender",
    "direction": "out",
    "message": "Is there anything I can help you with",
    "timeStamp": "1:52 PM",
    "ariaLabel": "You said Is there anything I can help you with at 1:52 PM"
  },
  {
    "id": "3432757116",
    "type": "message",
    "variant": "receiver",
    "direction": "in",
    "avatarInfo": {
      "name": "Sara Connor"
    },
    "message": "I am good.😃",
    "timeStamp": "1:53 PM",
    "ariaLabel": "Sara Connor said  I am good 😃. at 1:53 PM"
  },
  {
    "id": "2432461831",
    "type": "message",
    "variant": "sender",
    "direction": "out",
    "message": "Thanks for contacting us, have a great day",
    "timeStamp": "1:53 PM",
    "ariaLabel": "You said Thanks for contacting us, have a great day at 1:53 PM"
  },
  {
    "id": "2965626280",
    "type": "system",
    "message": "Chat has been ended"
  }
];

function App() {
  const [isVisible,toggleVisibility] = useState(false);
  const toggleChat = () => {
    toggleVisibility(!isVisible);
  }
  return (
    <Configuration>
    <div className="signal" style={{width: '450px'}}>
      
      <RChat msgList={messages} className={`signal-chat ${isVisible ? 'show-chat':'hide-chat'}`}/>
      <Button variant="primary" icon className="signal-chat-icon" onClick={() => toggleChat()}><Icon name="chat-solid"/></Button>
    </div>
    </Configuration>

  );
}

export default App;
