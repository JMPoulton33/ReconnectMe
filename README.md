## ReconnectMe
### Why?
When building ReconnectMe my aim was to prevent social isolation in older adults. Social media can make us feel like we’re maintaining all our important social connections. However, this can result in older generations getting left behind if they aren’t as confident using multi-faceted apps such as Facebook or Instagram.

I wanted this app to bridge the gap between the generations by allowing friends and family to request visits and organise social events from their smartphone, while providing a simple, intuitive, easy-to-use platform for more elderly users. 

### What?
#### In keeping with the goal of simplicity, ReconnectMe has three main functions:
* Displaying a simple calendar showing the user's upcoming events.
* Creating events involving friends and family to give the decision making power back to the user.
* A social activity tracker which warns you if you are at risk of social isolation, and intelligently provides event suggestions in the user's local area.

### How?
#### Frontend
The client side of the app is built entirely using React Native. Ever since React Native added support for function components I've found it extremely user friendly and the transition between React Web and React Native feels seamless, albeit with some minor syntax changes. I also love the flexibility afforded by React Native to develop for both Android and iOS. Although I initially plan to release the app for iOS devices, I will be looking to update the Android design once I am fully content with all design aspects on Apple's platform.

#### Backend
For the backend I opted to use an Express server with MongoDB as my database of choice. Utilising Mongoose for Object Data Modelling allowed me to define the shape of my data more strictly which made handling communication between the front and back end much easier. It also made it simpler to tweak when I came to make changes when adding new features. In the future I may look to switch to using a relational database such as PostgreSQL, as I'm sure the relations between the data will only increase as more features are added and the app continues to grow.


### What's Next?
#### Features I would love to add: 
1. A study looking into the causes of social isolation in South Lakeland, Cumbria, found that 'transport, weather, daylight and toilet facilities all determined whether respondents could get out and enjoy themselves'. I am currently in the process of evaluating which API services are most suitable for providing this data. 
2. AI chat bot. I looked into many options for a chat bot that would provide support to those who were struggling with social isolation. However I felt that commercially-available bots such as Replika and Mitsuki were more suited to broader topics of conversation although it would be interesting to see how the options increase in this rapidly evolving discipline. I am currently looking into how I could personally go about training a version of the OpenAI bot using the GPT-3 language model but I'd welcome any help and/or advice from anyone experienced in this field.
3. Including the ability for individuals to assist with transport to and from venues on a voluntary basis. This final goal is definitely a stretch, and falls somewhat outside of the scope of software development. However, I would love to find a way to offer users the option of local transport that would take them to any of the events suggested in their local area. This would especially help increase access for wheelchair users and those with limited mobility.
