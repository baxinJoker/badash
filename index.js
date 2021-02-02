import moment from 'moment'
import _ from 'lodash'

export const dateFormat = (string, startFormat, endFormat) => {
    return moment(string, _.castArray(startFormat)).format(endFormat)
}