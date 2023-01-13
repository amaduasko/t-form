// import type { CodegenConfig } from '@graphql-codegen/cli';

// const config: CodegenConfig = {
//   schema: process.env.API_URL,
//   documents: 'src/**/*.graphql',
//   generates: {
//     'src/api/index.ts': {
//       plugins: [
//         'typescript',
//         'typescript-operations',
//         'typescript-react-apollo',
//       ],
//       config: {
//         skipTypename: false,
//         withHooks: true,
//         withHOC: false,
//         withComponent: false,
//       },
//     },
//     './graphql.schema.json': {
//       plugins: ['introspection'],
//     },
//   },
// };
// export default config;

import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: process.env.REACT_APP_API_URI,
  documents: 'src/**/*.graphql',
  overwrite: true,
  generates: {
    './src/api/index.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
        apolloReactHooksImportFrom: '@apollo/client',
      },
    },
  },
};

export default config;
