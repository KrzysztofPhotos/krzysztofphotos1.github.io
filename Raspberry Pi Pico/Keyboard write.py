import time
import board
import digitalio
import usb_hid
 
from adafruit_hid.keyboard import Keyboard
from adafruit_hid.keyboard_layout_us import KeyboardLayoutUS
from adafruit_hid.keycode import Keycode
 
keyboard = Keyboard(usb_hid.devices)
keyboard_layout = KeyboardLayoutUS(keyboard) 
 
btn_record = digitalio.DigitalInOut(board.GP18)
btn_record.direction = digitalio.Direction.INPUT
btn_record.pull = digitalio.Pull.DOWN
 
btn_stop = digitalio.DigitalInOut(board.GP19)
btn_stop.direction = digitalio.Direction.INPUT
btn_stop.pull = digitalio.Pull.DOWN
 
while True:
	if btn_record.value:
		keyboard.press(Keycode.X)
		#time.sleep(0.1)
		keyboard.release(Keycode.X)
	if btn_stop.value:
		keyboard.press(Keycode.SPACE)
		#time.sleep(0.1)
		keyboard.release(Keycode.SPACE)
	#time.sleep(0.1)
