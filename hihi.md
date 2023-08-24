App ID: XXXXXXXX

MY-Client ID: YYYYYYYYYYYYYYYYY

MY-CLIENT-SECRET

653746453hjvsdcjhasvdljhdbjhg6753764r53754817657164351873728365817


Added now by phalanadhimkanatimkana
Never used
 

Open Github and Login

Go to Settings --> Developer Settings and register new app


Create .env.local file at root and add the following code
# Use the Following command to generate the Secret for the app
# NEXTAUTH_SECRET= # Linux: `openssl rand -hex 32` or go to https://generate-secret.now.sh/32
NEXTAUTH_SECRET=[NEXT-AUTH-SECREY]
GITHUB_ID=[GIT-ID]
GITHUB_SECRET=[GIT-SECRET]
