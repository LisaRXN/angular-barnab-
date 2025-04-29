function debounce(func: Function, wait: number) {
    
    let timeOut: any;
    
    return (...args: any[]) => {  
        clearTimeout(timeOut);
        timeOut = setTimeout(() => {
        func(...args);
      }, wait);
    };
  }