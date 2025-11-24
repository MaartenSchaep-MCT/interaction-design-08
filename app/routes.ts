import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("exercise/1", "routes/boop-animations.tsx"),
] satisfies RouteConfig;
