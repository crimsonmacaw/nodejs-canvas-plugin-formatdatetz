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
    format: {
      types: ['string'],
      aliases: ['_'],
      help: 'MomentJS Format with which to bucket (See https://momentjs.com/docs/#/displaying/)',
      required: true
    },

    timezone: {
      types: ['string'],
      help: 'The timezone',
      required: true,
      default: 'UTC'
    }
  },
  fn: (context, args) => {
    if (!args.format) return moment.utc(new Date(context)).tz(args.timezone).toISOString();
    return moment.utc(new Date(context)).tz(args.timezone).format(args.format);
  },
});
