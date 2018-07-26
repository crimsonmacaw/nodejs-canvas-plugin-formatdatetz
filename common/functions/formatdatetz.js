import moment from 'moment';
import 'moment-timezone/builds/moment-timezone-with-data';

export const formatdatetz = () => ({
  name: 'formatdatetz',
  type: 'string',
  help: 'Output a ms since epoch number as a formatted string according to a given timezone',
  context: {
    types: ['number'],
  },
  args: {
    _: {
      types: ['string'],
      help: 'MomentJS Format with which to bucket (See https://momentjs.com/docs/#/displaying/)',
    },

    timezone: {
      types: ['string'],
      help: 'The timezone'
    }
  },
  fn: (context, args) => {
    if (!args._) return moment.utc(new Date(context)).tz(args.timezone).toISOString();
    return moment.utc(new Date(context)).tz(args.timezone).format(args._);
  },
});
