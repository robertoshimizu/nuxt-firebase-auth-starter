export default defineNuxtPlugin(() => {
  const user = useUser();
  addRouteMiddleware(
    'auth',
    (to) => {
      if (to.path === '/' && user.value) {
        return navigateTo('/private');
      }

      if (to.path !== '/' && !user.value) {
        return navigateTo('/');
      }

      return;
    },
    { global: true }
  );
});
