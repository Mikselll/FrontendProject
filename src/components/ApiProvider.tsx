import ApiContext from '../contexts/ApiContext';

const ApiProvider = ({ children }: { children: React.ReactNode }) => {
  const api = 'https://express-service-dun.vercel.app';

  return (
    <ApiContext.Provider value={api}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;
