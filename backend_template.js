const data = require('./database.json');

const GetCumbiaAPIHandler = {

    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope;
        return Alexa.getRequestType(request) === 'Dialog.API.Invoked'
            && request.request.apiRequest.name === 'getCumbia';
    },
    handle(handlerInput) {
        const apiRequest = handlerInput.requestEnvelope.request.apiRequest;

    }
};

// *****************************************************************************
// Resolves slot value using Entity Resolution
const resolveEntity = function(resolvedEntity, slotName) {

    //This is built in functionality with SDK Using Alexa's ER
    let erAuthorityResolution = resolvedEntity[slotName].resolutions.resolutionsPerAuthority[0];
    let value = null;
    
    if (erAuthorityResolution.status.code === 'ER_SUCCESS_MATCH') {
        value = erAuthorityResolution.values[0].value.name;
    }

    return value;
}

const buildSuccessApiResponse = (returnEntity, endSession = false) => {
    return { apiResponse: returnEntity, shouldEndSession: endSession};
};