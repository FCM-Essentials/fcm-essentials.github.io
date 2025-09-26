import React from "react";
import ReactMarkdown from "react-markdown";

const markdownContent = `
![image](https://media.forgecdn.net/attachments/description/1315438/description_43fe5883-f14b-4115-9dc8-49d561bcc4e4.png)

![image](https://media.forgecdn.net/attachments/description/1315438/description_17d9e383-7923-4d00-a5d1-ae0dfe328062.png)

![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https://github.com/bytebukkit/FCM-Essentials/raw/refs/heads/main/.github/org/bytebukkit/projects/net/fcm/essentials/mod.json&query=version&style=for-the-badge&label=Version) ![Static Badge](https://img.shields.io/badge/In_Work-1.7.3-orange?style=for-the-badge) ![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https://github.com/bytebukkit/FCM-Essentials/raw/refs/heads/main/.github/org/bytebukkit/projects/net/fcm/essentials/mod.json&query=authors&style=for-the-badge&label=Author)

[![Minimal Powered by OneConfig](https://polyfrost.org/media/branding/badges/badge_3.svg)](https://github.com/Polyfrost/OneConfig)

![image](https://media.forgecdn.net/attachments/description/1315438/description_b87e0c36-0b10-4682-b42a-4ab4780ccfcd.png)

Configure every detail about FCM Essentials through OneConfig!

![image](https://media.forgecdn.net/attachments/description/1315438/description_bbc61810-adc6-4454-a2c4-3a58e6ff2b3b.png)

![image](https://media.forgecdn.net/attachments/description/1315438/description_73fb3071-455d-495d-8f68-3a9fb7ddd42e.png)

Modify your protools to your liking! With WorldEdit mode, custom messages, custom prefixes and CUI!

### Custom Mode

**Set Position in custom mode:**

![image](https://media.forgecdn.net/attachments/description/1315438/description_3fe47c2d-a0d4-4b82-a959-570cc056037a.png)

**Set Block in custom mode:**

![image](https://media.forgecdn.net/attachments/description/1315438/description_c7f8816c-2da7-49a5-a5e1-151020281761.png)

### WorldEdit Mode

**Set Position in WorldEdit mode:**

![image](https://media.forgecdn.net/attachments/description/1315438/description_22fd50fe-8624-4b6d-9509-120d881eaaa1.png)

**Set Block in WorldEdit mode:**

![image](https://media.forgecdn.net/attachments/description/1315438/description_b6013ae1-be07-41ff-929c-68d90887ce6f.png)

### ProTools CUI

Like in the previous release, the ProToolsCUI visualizes your selection more effectively!

![image](https://media.forgecdn.net/attachments/description/1315438/description_9fa85417-2425-4ab5-a4d2-f15d7d925061.png)

ProTools CUI should not be used with the [ChatTriggers](https://chattriggers.com/) module [ProToolsCUI](https://chattriggers.com/modules/v/ProtoolsCUI) by Debug, as it could cause incompatibility issues. If you want to keep using the ChatTriggers module, turn off ProTools CUI in the configurations:

![image](https://media.forgecdn.net/attachments/description/1315438/description_c4577b42-a15a-4d00-9646-6e259c582aea.png)

![image](https://media.forgecdn.net/attachments/description/1315438/description_671bac4f-c9c0-43d2-a1f0-defc78cbb1f3.png)

You are now able to modify your housings even more with complete control over your scoreboard and bossbars visually! This is visible to everyone who is using the mod.

### Custom Bossbars

Render custom bossbars in your housing with a few short steps on the \[FCM Developer Portal\]() and unleash your creativity!

![image](https://media.forgecdn.net/attachments/description/1315438/description_05553aee-7e01-4530-842a-d4f318978422.png)

### Custom Scoreboards

You are now able to bypass hypixels limitations, and even remove their branding entirely!

![image](https://media.forgecdn.net/attachments/description/1315438/description_f18a8cc3-f002-4c14-bd3d-a93b3ff811ae.png)

To create scoreboards, look onto the \[FCM Developer Portal\]().

![image](https://media.forgecdn.net/attachments/description/1315438/description_c62a47f3-22b2-4307-82c3-6bc6d8302fa3.png)

Mark and see flagged griefers very easily through a chat announcement and a indicator next to their name. This is useful for freebuild owners for tracking griefers.

You can add griefers on your local configuration setup with /fcm griefer add <username> <reason>. To contribute to the community GrieferRadar and flag people on the global radar, join our discord server and issue to add a griefer.

![image](https://media.forgecdn.net/attachments/description/1315438/description_700b1c08-8be3-40b6-911a-34c94b1455ba.png)
`;

const data = {
title: "FCM Home",
path: "/",
content: <ReactMarkdown>{markdownContent}</ReactMarkdown>
};

export default data;
