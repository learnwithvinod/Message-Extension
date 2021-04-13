// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const axios = require('axios');
const querystring = require('querystring');
const { TeamsActivityHandler, CardFactory } = require('botbuilder');

class TeamsMessagingExtensionsSearchBot extends TeamsActivityHandler {
    async handleTeamsMessagingExtensionQuery(context, query) {
        const attachments = [];
        const heroCard = CardFactory.heroCard("staff-hours");
            const preview = CardFactory.heroCard("staff-hours");
            preview.content.tap = { type: 'invoke', value: { description: "staff-hours" } };
            const attachment = { ...heroCard, preview };
        attachments.push(attachment);

        return {
            composeExtension: {
                type: 'result',
                attachmentLayout: 'list',
                attachments: attachments
            }
        };
    }

    async handleTeamsMessagingExtensionSelectItem(context, obj) {
        return {
            composeExtension: {
                type: 'result',
                attachmentLayout: 'list',
                attachments: [CardFactory.thumbnailCard(obj.description)]
            }
        };
    }
}

module.exports.TeamsMessagingExtensionsSearchBot = TeamsMessagingExtensionsSearchBot;
