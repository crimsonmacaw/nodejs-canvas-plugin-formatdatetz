import { functionsRegistry } from 'plugins/canvas/lib/functions_registry';
import { commonFunctions } from '../../common/functions';

commonFunctions.forEach(fnDef => functionsRegistry.register(fnDef));
