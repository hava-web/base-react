type ConfigModel = NodeJS.ProcessEnv & {
  REACT_APP_BASE_URL: string;
  REACT_APP_PUBLIC_URL: string;
  REACT_APP_WS_URL: string;
  REACT_APP_CLOUD_BASE_URL: string;
};

const CONFIG = process.env as ConfigModel;

export default CONFIG;
