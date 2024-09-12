import { describe, it } from 'vitest';

describe('router.model', () => {
  describe('addRoute', () => {
    it.todo('should add a new route to the router');
    it.todo('should add a new route to the router with no name');
    it.todo('should add a new route to the router with children');

    it.todo('should throw a RouterNameConflictError if a route with the same name already exists');
    it.todo('should throw a RouterPathConflictError if a route with the same path already exists');
  });

  describe('removeRoute', () => {
    it.todo('should remove an existing route by its name');
    it.todo('should remove an existing route by its path');
    it.todo('should return false if the route does not exist');
    it.todo('should return false if no name or path is provided');
    it.todo('should throw a RouterNamePathMismatchError if the path provided and registered do not match');
    it.todo('should throw a RouterNamePathMismatchError if the name provided and registered do not match');
  });

  describe('beforeEach', () => {
    it.todo('should add a navigation guard to be called before each navigation');
    it.todo('should remove a navigation guard when the returned function is called');
  });

  describe('afterEach', () => {
    it.todo('should add a navigation guard to be called after each navigation');
    it.todo('should remove a navigation guard when the returned function is called');
  });

  describe('onLoading', () => {
    it.todo('should add a navigation guard to be called when a navigation is loading');
    it.todo('should remove a navigation guard when the returned function is called');
  });

  describe('onLoaded', () => {
    it.todo('should add a navigation guard to be called when a navigation is loaded');
    it.todo('should remove a navigation guard when the returned function is called');
  });

  describe('onError', () => {
    it.todo('should add a navigation guard to be called when a navigation has an error');
    it.todo('should remove a navigation guard when the returned function is called');
  });

  describe('resolve', () => {
    describe('name', () => {
      it.todo('should resolve a route from a name');
      it.todo('should resolve a route from a name with param parameters');
      it.todo('should resolve a route from a name with query parameters');
      it.todo('should resolve a route from a name with both param and query parameters');
    });

    describe('location', () => {
      it.todo('should resolve a route from an absolute location');
      it.todo('should resolve a route from a relative location');
      it.todo('should resolve a route from a location with param parameters');
      it.todo('should resolve a route from a location with query parameters');
      it.todo('should resolve a route from a location with both param and query parameters');
    });

    describe('matching', () => {
      it.todo('should fail to parse an invalid path');
      it.todo('should fail with a NavigationNotFoundError if the route does not exist and failOnNotFound is true');
      it.todo('should return undefined if an exact match is not found and strict is true');
      it.todo('should return the first match if an exact match is not found and strict is false');
    });
  });

  describe('navigate', () => {
    describe('push', () => {
      it.todo('should push a new entry to the history for a location');
      it.todo('should push a new entry to the history for a name');
      it.todo('should push a new entry to the history with a title');
      it.todo('should push a new entry to the history with a state');
      it.todo('should push a new entry to the history with a title and state');
    });

    describe('replace', () => {
      it.todo('should replace the current entry in the history with a location');
      it.todo('should replace the current entry in the history with a name');
      it.todo('should replace the current entry in the history with a title');
      it.todo('should replace the current entry in the history with a state');
      it.todo('should replace the current entry in the history with a title and state');
    });

    describe('navigate', () => {
      it.todo('should push a new entry to the history for a location');
      it.todo('should push a new entry to the history for a name');
      it.todo('should replace the current entry in the history with a location');
      it.todo('should replace the current entry in the history with a name');
      it.todo('should do nothing if the location is the same as the current one and force is not true');
      it.todo('should push a new entry to the history if the location is the same as the current one and force is true');
      it.todo('should replace the current entry in the history if the location is the same as the current one and force is true and replace is true');
    });

    describe('go', () => {
      it.todo('should navigate forward to a location by its position in the history');
      it.todo('should navigate backward to a location by its position in the history');
    });

    describe('back', () => {
      it.todo('should navigate backward in the history');
    });

    describe('forward', () => {
      it.todo('should navigate forward in the history');
    });

    describe('listeners', () => {
      it.todo('should store scroll position when unloading a page');
    });
  });
});
