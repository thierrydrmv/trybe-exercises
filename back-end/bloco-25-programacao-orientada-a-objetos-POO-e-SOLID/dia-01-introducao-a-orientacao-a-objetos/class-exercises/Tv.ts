class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(b: string, s: number, r: string, c: string[]){
    this._brand = b;
    this._size = s;
    this._resolution = r;
    this._connections = c;
  }

  turnOn() {
    console.log(this._brand, this._size, this._resolution, this._connections)
  }

  get connectedTo() : string | undefined {
    return this._connectedTo;
  }
  set connectedTo(value: string | undefined) {
    if (!value || this._connections.includes(value)) {
      this._connectedTo = value;
    } else {
      console.log('Sorry, connection unavailable!')
    }
  }
}

const tv1 = new Tv('LG', 43, '4k', ['HDMI', 'Wifi'])

tv1.turnOn();

tv1.connectedTo = 'HDMI';

console.log(tv1.connectedTo);
