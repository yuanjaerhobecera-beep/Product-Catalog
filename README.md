
## Laboratory Exercise 4: React useState and useEffect

### Guide Questions

1. **Why do we use two separate states, searchText and debouncedSearch, instead of only one?**
   searchText updates immediately while typing. debouncedSearch updates after 300 milliseconds, preventing filtering on every keystroke.

2. **What would happen if the debounce effect did not return a cleanup function?**
   Old timers would continue running, which could cause unnecessary updates and filtering.

3. **What is the purpose of the dependency array? What happens if it is empty ([])? What happens if it is left out completely?**
   The dependency array controls when useEffect runs. An empty array runs the effect only after the initial render. Without it, the effect runs after every render.

4. **Why should we avoid sorting the original products array directly?**
   Sorting the original array changes the existing data. We use a copy to keep the original array unchanged.

5. **Is the filtered product list better stored in its own state, or calculated from existing state during rendering? Explain your choice.**
   It is better to calculate it during rendering because it is based on existing states. This avoids unnecessary state updates and keeps the data consistent.

### Technologies Used

- React
- JavaScript
- CSS
- Vite
- useState
- useEffect
