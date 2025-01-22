This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Folder Structur

```plaintext
project/
├── public/
│   ├── favicon.ico              # The website icon displayed in the browser tab.
│   └── logo.svg                 # The main logo for the app, usually used in headers or branding.
│
├── src/
│   ├── app/
│   │   ├── global.css           # Custom global CSS styles used across the application, applied to all components.
│   │   ├── layout.js            # Main layout component, wrapping common layout structure for pages.
│   │   ├── not-found.jsx        # Custom 404 error page for handling undefined routes.
│   │   ├── auth/                # Directory for authentication-related pages.
│   │   │   ├── layout.jsx       # Layout component specific to authentication pages.
│   │   │   ├── login/
│   │   │   │   └── page.jsx     # Login page component.
│   │   │   ├── register/
│   │   │   │   └── page.jsx     # Register page component.
│   │   │   └── forgot-password/
│   │   │       └── page.jsx     # Forgot password page component.
│   │   ├── dashboard/           # Directory for dashboard-related pages.
│   │   │   ├── layout.jsx       # Layout component specific to dashboard pages.
│   │   │   ├── page.jsx         # Main dashboard page component.
│   │   │   └── user/
│   │   │       └── page.jsx     # User management page within the dashboard.
│   │   └── fonts/
│   │       └── font.woff        # Custom local font file used throughout the application.
│
│   ├── components/
│   │   ├── layouts/             # Components that handle app layout and access control.
│   │   │   ├── ComponentHasPermission.jsx  # Component that restricts access based on permissions.
│   │   │   ├── DashboardLayout.jsx         # Main layout component for the dashboard.
│   │   │   ├── PageWrapper.jsx             # Wrapper for page
│   │   │   └── ProtectedRoute.jsx          # Component to handle route protection based on authentication.
│   │   ├── common/               # Reusable components used across different parts of the app.
│   │   │   ├── button/                     # folder for button component
│   │   │   │   └── SaveButton.jsx         
│   │   │   ├── dialog/                     # folder for dialog component
│   │   │   │   └── ConfirmDialog.jsx       
│   │   │   ├── form/                       # folder for form component
│   │   │   │   └── FormWithLabel.jsx      
│   │   │   ├── loading/                    # folder for button component
│   │   │   │   └── SkeletonLoading.jsx     
│   │   │   ├── other/                      # folder for other component
│   │   │   │   └── AppBarProfile.jsx       
│   │   │   └── table/                      # folder for button component
│   │   │       └── MainTable.jsx           
│   │   └── pages/                          # folder for component by page
│   │       └── user/                       # ex, component for user page
│   │           └── UserForm.jsx            
│
│   ├── config/
│   │   ├── axios.js             # Axios configuration for handling HTTP requests.
│   │   ├── axiosBaseQuery.js    # Axios base query setup for Redux or RTK Query.
│   │   ├── permission.js        # Configuration and rules for user permissions.
│   │   └── sidebar.js           # Sidebar configuration, such as items and icons.
│
│   ├── helpers/                 # Utility functions to help with formatting, validation, etc.
│   │   ├── formatDate.ts        
│   │   ├── validateEmail.ts     
│   │   └── ...
│
│   ├── hooks/                   # Custom hooks for data fetching and managing state.
│   │   ├── usePagination.ts     # Hook to handle pagination.
│   │   ├── useShowSnackbar.ts   # Hook to show snackbar notifications.
│   │   └── ...
│
│   ├── services/                # API services for specific functionalities.
│   │   ├── AuthService.ts       # Service for authentication-related requests.
│   │   └── ...
│
│   ├── store/
│   │   ├── slice/               # Slices for managing Redux state.
│   │   │   ├── api/
│   │   │   │   └── UserSlice.js # Handle user API
│   │   │   └── component/
│   │   │       └── SnackbarSlice.js  # Handle snackbar state
│   │   ├── index.js             # Main store configuration file.
│   │   ├── ReduxProvider.js     # Redux Provider component for wrapping the app.
│
│   ├── theme/
│   │   ├── index.jsx            # Theme configuration for Material UI or custom theming.
│   └── ...
│
├── next.config.js               # Configuration file for Next.js settings and plugins.
├── package.json                 # NPM package file, lists dependencies and scripts.
├── tsconfig.json                # TypeScript configuration file for the project.
```

## Library
1. [Mui](https://mui.com) - UI Kit
2. [Formik](https://formik.org) - Form
3. [Yup](https://www.npmjs.com/package/yup) - Form Validation
4. [Redux](https://react-redux.js.org/) - State Management
5. [Axios](https://axios-http.com/) - HTTP Client
6. [RTK-Query](https://redux-toolkit.js.org/rtk-query) - Handling API

## Potential Library be used
1. [Full Calender](https://fullcalendar.io/docs/react) - Calender
2. [Drag and Drop](https://react-dnd.github.io/) - Drag and drop module
2. [Maps](https://leafletjs.com/) - Maps

## Requriment
1. Node.js 18.18 or later.
2. NextJs 15


