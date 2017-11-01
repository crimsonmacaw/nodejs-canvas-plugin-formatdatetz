import { functionsRegistry } from 'plugins/canvas/lib/functions_registry';
import { clientFunctions } from '../../public/functions';
import { commonFunctions } from '../../common/functions';

// register client and common functions in the client runtime
clientFunctions.forEach(fnDef => functionsRegistry.register(fnDef));
commonFunctions.forEach(fnDef => functionsRegistry.register(fnDef));
