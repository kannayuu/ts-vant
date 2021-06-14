import { NavigationGuard } from "vue-router";

interface RouteComponent {
  beforeRouteEnter?: NavigationGuard;
  beforeRouteUpdate?: NavigationGuard;
  beforeRouteLeave?: NavigationGuard;
  [key: string]: any;
}
