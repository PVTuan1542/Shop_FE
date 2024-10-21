declare module 'react-oauth2-login' {
  import * as React from 'react';

  interface OAuth2LoginProps {
    authorizationUrl: string;
    clientId: string;
    redirectUri: string;
    responseType: string;
    scope: string;
    onSuccess: (response: any) => void;
    onError: (error: any) => void;
  }

  export default class OAuth2Login extends React.Component<OAuth2LoginProps> {}
}