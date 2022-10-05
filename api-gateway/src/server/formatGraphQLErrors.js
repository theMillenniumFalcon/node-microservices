import _ from "lodash"

export const formatGraphQLErrors = error => {
    const errorDetails = _.get(error, "originalError.response.body")
    try {
        if (errorDetails) return JSON.parse(errorDetails)
    } catch (err) { }

    return null
}