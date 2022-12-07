export enum RoutesDynamicKey {
  FilmId = "[film_id]",
}

export enum Routes {
  Index = "/",
  Patients = "/patients",
  Prospects = "/Prospects",
  Account = "/Account",
  Education = "/Education",
  Upload = "/upload",
  Support = "/Support",
  VituralCare = "/VituralCare",
  About = "/about",
  Films = "/films",
  Films_FilmId = "/films/[film_id]",
}

// export const MainRoutes = [];

export const MainRoutes = {
  Index: {
    id: "0",
    title: "Home",
    active: false,
    route: Routes.Index,
  },
  Patients: {
    id: "1",
    title: "Patients",
    active: false,
    route: Routes.Patients,
  },
  Prospects: {
    id: "2",
    title: "Prospects",
    active: false,
    route: "/test",
  },
  Account: {
    id: "3",
    title: "Account",
    active: false,
    route: "/test-2",
  },
  Education: {
    id: "4",
    title: "Education",
    active: false,
    route: "/add-new-patient",
  },
  Support: {
    id: "5",
    title: "Support",
    active: false,
    route: "/support",
  },
  VituralCare: {
    id: "6",
    title: "Virtual Care",
    active: false,
    route: "/table",
  },
  Upload: {
    id: "7",
    title: "Upload",
    active: false,
    route: Routes.Upload,
  },
  About: {
    id: "8",
    title: "About",
    active: false,
    route: Routes.About,
  },
};
