export const limit = 2; 

export const radius = 50;

export const defaultQuery = "";

export const baseApiUrl = "https://liveapi-sandbox.yext.com/v2/accounts/me";

export const liveAPIKey = "e58a233583cfa3f71cbf0ef7f2604935";

export const savedFilterId = "";

export const entityTypes = "location";

export const googleMapsConfig =  {
    centerLatitude:	51.5095146286,
    centerLongitude:-0.1244828354,
    googleMapsApiKey: "AIzaSyDZNQlSlEIkFAct5VzUtsP4dSbvOr2bE18"   
};

export const AnswerExperienceConfig =  {
    experienceKey: "turtlehead-tacos-locator",
    locale:"en",
    apiKey: "f9fd48406d87a5ec0f6d3e2451dc6650",
    verticalKey: "locations",
    experienceVersion: "STAGING",
    sessionTrackingEnabled: true,
    endpoints:{
        universalSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/query",
        verticalSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/query",
        questionSubmission: "https://liveapi-sandbox.yext.com/v2/accounts/me/createQuestion",
        universalAutocomplete: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/autocomplete",
        verticalAutocomplete: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/autocomplete",
        filterSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/filtersearch"
    }
};



