

function useTimeout(time:number = 200) {
    
  let timer: number = 0;
  let timeout: ReturnType<typeof setTimeout>;

  return (refresh: any) => {
    clearTimeout(timeout);
    timer = time;
    timeout = setTimeout(()=> {
      timer = 0;
      refresh();
    }, timer);
  };
  
};


export default useTimeout;