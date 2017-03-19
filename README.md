Ionic2Do
===
Mobile App Development with Ionic 2 (~ chapter 7)

![screen1](screenshots/s1.min.png)

## Run

List available ios targets: 
```bash
ios-sim showdevicetypes
```

Emulate: 
```bash
ionic emulate ios -l -c --target="iPhone-7, 10.2"
ionic emulate ios -l -c --target="iPhone-7-Plus, 10.2"
```
其中-c(--consolelogs)将日志直接打印到terminal, -l(--livereload)支持保存刷新

### ionic dialogs
```js
Dialogs.prompt('Add a task', "Ionic2Do", ['Ok', 'Cancel'], '')
  .then(theResult => {
    if ((theResult.buttonIndex == 1) && (theResult.input1 !== '')) {
      this.tasks.push({title: theResult.input1, status: 'open'});
    }
  });

```
