import type { IncomingMessage, ServerResponse } from 'http';

export default (_req: IncomingMessage, _res: ServerResponse) => {
	return {
		message:
			'This is a protected content. You can access this content because you are signed in.',
	};
};
