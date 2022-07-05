# Rungie Challenge

this documentacion is for explain the current challenge, used methods, components, tecnology, and somothing like that.

### Frameworks and Libraries

I select next.js for this challenge because is a good selection to a fast and static single page by its output compression.
But there are many libraries include in it, the some libraries are:

- `@emotion` to use styledcomponents because the original library is not much compability with server side rendering.
- `emotion-normalize` to fix the browser styles
- `react-combine-reducers` to extends the react context with many reducer, thining in the future scalability
- `react-query` to fetch and cache the request, it is not necesary for now, but its a good idea to future scalability
- `typescript` to generate more strongly typed code.

You can see that the all global libraries is called whit alias, to more humanreadly code

### Launch the project

To launch the proyecto, you can see the scripts in package.json, the script `npm run dev` for example to run the proyect

### Components Decision

All code was moved to singular compoent instead of page view, because it allow me to divide resposability code by file.
There are 5 files types:

- \*.tsx to presentation component logic
- \*.types.ts to types all stuuf about the component
- \*.hook.ts has located all business logic
- \*.styled.ts to all components styles
- \*.test.ts to locate all test about component

There are possible other folder how helper, to contain extra business logic to keep the code order.

There are other principal component too, the Layout is to wrapper the others component and make basic styles.

### Hooks and Helpers Global

There are other global folders to the shared code, how Hooks and Helpers and others.

- Hooks folder: Contain custom global react hooks, to make specific task in the challenge, allow to acces the all react context divided by responsabilties.
- Helpers folder: extra business logic, but located in a shared scope.
- Types: variety of shared types.
- Tools: its a extra tools for the develop, how translate tools, theme styles, and stuuf like that.
- Models: Into models there are all pseudoRedux context to manage the global state and request http logic.

### Specific coments

To manage the events mouse in the aplication, I built a custom hooks `useMouseEvents` that manage all events. and to manage the windows resize I built `useWindowDimensions`

### Issues

The longPress and drag not working always succesful, because it confuse whit the drag event, at least in chrome. For this case it will better use a canvas system intead the tag system.

### Test

I can not more time to make the all test that I would have wanted, but I can expain it. I make 2 test type for the challenge:

- `Unit Test`: I would have used @testing-library library, because enzime not updated his library since 2 year ago. I have some examples about it from other challenge in the last month, I leave deposited the example file how: examples.test.tsx in root folder.
- `2e2 Test`: In this case I would used `cypress.io` because it's more popular, but i used in the past `codecept.io` because has compability with more engines.
