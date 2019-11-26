export type IObserver = (input: number) => void


class ObservableBase {
  private observers: IObserver[] =[]
  private intervalId: any  =  null
  public data = 0

  public attach(observer: IObserver) {
    this.observers.push(observer)
  }

  public detach(observerToRemove: IObserver) {
    this.observers = this.observers.filter(observer=> observer !== observerToRemove )
  }

  private notify(data: number) {
    this.observers.forEach(observer=> observer(data))
  }

  public start() {
    this.intervalId = setInterval(()=>{
      this.data ++ 
      console.log('observable updated');
      this.notify(this.data)
    },
    1000
    )
  }

  public cleanUpdates () {
    if(this.intervalId) {
      clearInterval(this.intervalId)
      this.intervalId = null
    }
  }

}

const observableBase = new ObservableBase()

export default observableBase
