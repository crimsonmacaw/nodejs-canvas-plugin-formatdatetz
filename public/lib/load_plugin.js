import { functions as functionsRegistry } from 'plugins/canvas/lib/functions';
import { commonFunctions } from '../../common/functions';

commonFunctions.forEach(fnDef => functionsRegistry.register(fnDef));
