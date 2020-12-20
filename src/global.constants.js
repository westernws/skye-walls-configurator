export const {
	ACCESS_KEY_ID,
	NEXT_PUBLIC_DOMAIN: DOMAIN,
	BUCKET_NAME,
	REGION,
	SECRET_ACCESS_KEY,
} = process.env || {};
export const IMAGE_PATH = `https://${DOMAIN}/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=`;
