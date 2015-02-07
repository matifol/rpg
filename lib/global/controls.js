



function setControls(){
  upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
  downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
  leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
  rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
}

function movements(){
  if (upKey.isDown)
  {
      player.y -= playerSpeed;
  }
  else if (downKey.isDown)
  {
      player.y += playerSpeed;
  }

  if (leftKey.isDown)
  {
      player.x -= playerSpeed;
  }
  else if (rightKey.isDown)
  {
      player.x += playerSpeed;
  }
}
