# ORCΛ

<img src='https://raw.githubusercontent.com/hundredrabbits/Orca/master/resources/logo.png' width="600"/>

**Each letter of the alphabet is an operation**, <br />lowercase letters operate on bang, uppercase letters operate each frame. 

**To learn more**, have a look at some projects created with [#ORCΛ](https://twitter.com/hashtag/ORCΛ), watch the [introduction video](https://www.youtube.com/watch?v=RaI_TuISSJE), or check out the [examples](https://github.com/hundredrabbits/Orca/tree/master/examples) & [tutorials](TUTORIAL.md). If you need some help, visit the [forum](https://llllllll.co/t/orca-live-coding-tool/17689), or the [chatroom](https://talk.lurk.org/channel/orca). 

If you're looking for a **light version of Orca**, visit [Orca-c](http://github.com/hundredrabbits/Orca-c). 

## Install & Run

You can download [builds](https://hundredrabbits.itch.io/orca) for **OSX, Windows and Linux**, or if you wish to build it yourself, follow these steps:

```
git clone https://github.com/hundredrabbits/Orca.git
cd Orca/desktop/
npm install
npm start
```

<img src='https://raw.githubusercontent.com/hundredrabbits/Orca/master/resources/preview.jpg' width="600"/>

## Operators

- `A` **add**: Outputs the sum of inputs.
- `B` **bool**: Bangs if input is not empty, or 0.
- `C` **clock**: Outputs a constant value based on the runtime frame.
- `D` **delay**: Bangs on a fraction of the runtime frame.
- `E` **east**: Moves eastward, or bangs.
- `F` **if**: Bangs if both inputs are equal.
- `G` **generator**: Writes distant operators with offset.
- `H` **halt**: Stops southward operators from operating.
- `I` **increment**: Increments southward operator.
- `J` **jumper**: Outputs the northward operator.
- `K` **konkat**: Outputs multiple variables.
- `L` **loop**: Loops a number of eastward operators.
- `M` **modulo**: Outputs the modulo of input.
- `N` **north**: Moves Northward, or bangs.
- `O` **offset**: Reads a distant operator with offset.
- `P` **push**: Writes an eastward operator with offset.
- `Q` **query**: Reads distant operators with offset.
- `R` **random**: Outputs a random value.
- `S` **south**: Moves southward, or bangs.
- `T` **track**: Reads an eastward operator with offset.
- `U` **uturn**: Reverses movement of inputs.
- `V` **variable**: Reads and write globally available variables.
- `W` **west**: Moves westward, or bangs.
- `X` **teleport**: Writes a distant operator with offset.
- `Y` **jymper**: Outputs the westward operator.
- `Z` **zoom**: Moves eastwardly, respawns west on collision.
- `*` **bang**: Bangs neighboring operators.
- `#` **comment**: Comments a line, or characters until the next hash.
- `:` **midi**: Sends a MIDI note.
- `^` **cc**: Sends a MIDI CC value.
- `;` **udp**: Sends a UDP message.
- `=` **osc**: Sends a OSC message.
- `_` **themer**: Modifies the currently loaded theme.

## MIDI

The [MIDI](https://en.wikipedia.org/wiki/MIDI) operator `:` takes up to 5 inputs('channel, 'octave, 'note, velocity, length). 

For example, `:25C`, is a **C note, on the 5th octave, through the 3rd MIDI channel**, `:04c`, is a **C# note, on the 4th octave, through the 1st MIDI channel**. Velocity is an optional value from `0`(0/127) to `g`(127/127). Note length is the number of frames during which a note remains active. See it in action with [midi.orca](https://github.com/hundredrabbits/Orca/blob/master/examples/_midi.orca).

## MIDI CC

The [MIDI CC](https://www.sweetwater.com/insync/continuous-controller/) operator `^` takes 3 inputs('channel, 'knob, 'value).

It sends a value **between 0-127**, where the value is calculated as a ratio of 36, over a maximum of 127. For example, `^08`, is equal to **28**, or `(8/36)*127`. You can press `shift+enter`, with the `^` operator selected, to assign it to a controller.

## UDP

The [UDP](https://nodejs.org/api/dgram.html#dgram_socket_send_msg_offset_length_port_address_callback) operator `;` locks each consecutive eastwardly ports. For example, `;hello`, will send the string "hello", on bang, to the port `49160` on `localhost`

You can use the [listener.js](https://github.com/hundredrabbits/Orca/blob/master/listener.js) to test UDP messages. See it in action with [udp.orca](https://github.com/hundredrabbits/Orca/blob/master/examples/_udp.orca).

## OSC

The [OSC](https://github.com/MylesBorins/node-osc) operator `=` locks each consecutive eastwardly ports. The first character is used for the path, the following characters are sent as integers using the [base36 Table](https://github.com/hundredrabbits/Orca#base36-table).

For example, `=1abc` will send `10`, `11` and `12` to `/1`, via the port `49162` on `localhost`; `=a123` will send `1`, `2` and `3`, to the path `/a`. You can use the [listener.js](https://github.com/hundredrabbits/Orca/blob/master/listener.js) to test OSC messages. See it in action with [osc.orca](https://github.com/hundredrabbits/Orca/blob/master/examples/_osc.orca) or try it with [SonicPi](https://github.com/hundredrabbits/Orca/blob/master/TUTORIAL.md#sonicpi).

<img src='https://raw.githubusercontent.com/hundredrabbits/Orca/master/resources/preview.hardware.jpg' width="600"/>

## Base36 Table

Orca operates on a base of **36 increments**. Operators using numeric values will typically also operate on letters and convert them into values as per the following table. For instance `Dp` will bang every *24th frame*.

| 0     | 1     | 2     | 3     | 4     | 5     | 6     | 7     | 8     | 9     | A     | B      | 
| :-:   | :-:   | :-:   | :-:   | :-:   | :-:   | :-:   | :-:   | :-:   | :-:   | :-:   | :-:    | 
| 0     | 1     | 2     | 3     | 4     | 5     | 6     | 7     | 8     | 9     | 10    | 11     |
| **C** | **D** | **E** | **F** | **G** | **H** | **I** | **J** | **K** | **L** | **M** | **N**  |
| 12    | 13    | 14    | 15    | 16    | 17    | 18    | 19    | 20    | 21    | 22    | 23     | 
| **O** | **P** | **Q** | **R** | **S** | **T** | **U** | **V** | **W** | **X** | **Y** | **Z**  | 
| 24    | 25    | 26    | 27    | 28    | 29    | 30    | 31    | 32    | 33    | 34    | 35     |

## Default Ports

| UDP Input  | OSC Input  | UDP Output | OSC Output |
| ---------- | ---------- | ---------- | -----------|
| 49160      | None       | 49161      | 49162

## Companion Applications

- [PILOT](https://github.com/hundredrabbits/pilot), a companion synth tool.
- [AIOI](https://github.com/MAKIO135/aioi), a companion to send complex OSC messages.
- [ESTRA](https://github.com/kyleaedwards/estra), a companion sampler tool.

## Extras

- This application supports the [Ecosystem Theme](https://github.com/hundredrabbits/Themes).
- Support this project through [Patreon](https://patreon.com/100).
- See the [License](LICENSE.md) file for license rights and limitations (MIT).
- Pull Requests are welcome!
