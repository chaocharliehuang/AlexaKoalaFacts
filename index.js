'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.  
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = undefined;

var SKILL_NAME = "Koala Facts";
var GET_FACT_MESSAGE = "Here's your fact: ";
var HELP_MESSAGE = "You can say tell me a koala fact, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
var data = [
    "Koalas are not bears. They are marsupials, which means that their young are born immature and they develop further in the safety of a pouch.",
    "Habitat loss is the greatest threat to koalas. The main reasons for this are land clearing, bushfires and diseases of the eucalypts, like ‘dieback' which cause the trees to die.",
    "There are likely to be less than 80,000 koalas remaining in Australia today and it could be as low as 43,000. Much of their habitat has already been lost.",
    "Koalas have 5 digits on each front paw, two of which are opposed to the others, much like our thumbs are able to be moved differently from the fingers. This helps them to hold firmly onto the branches and to grip their food.",
    "Koalas are mostly nocturnal. They often sleep for up to 18-20 hours each day.",
    "Each Koala’s ‘home' is made up of several trees called HOME TREES. They visit these same trees regularly. The area covered by these trees is called the Koala’s HOME RANGE.",
    "A mature male has a dark scent gland in the centre of his white chest which exudes a dark, sticky substance. He rubs this on his trees to indicate to other Koalas that this is his territory.",
    "Baby Koalas are known as ‘Joeys'.",
    "An adult Koala eats about half a kilogram to one kilogram of leaves each night.",
    "Koalas don’t normally need to drink as they get all the moisture they need from the gumleaves. However, they can drink if necessary, such as in times of drought when the leaves may not contain sufficient moisture.",
    "All koalas have chlamydia.",
    "Koalas are invincible to fire.",
    "Koalas are polyamorous but may only have at most five lovers at any one time.",
    "Koalas are not bears because they do not have the koala fications."
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.  
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};