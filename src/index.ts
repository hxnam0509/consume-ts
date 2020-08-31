import { getPlural } from 'publish-ts';
import Spinner from '@atlaskit/spinner';

const result = getPlural({status: 'hello'});
console.error(result);

