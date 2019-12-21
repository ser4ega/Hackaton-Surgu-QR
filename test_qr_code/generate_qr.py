# Import QRCode from pyqrcode 
import pyqrcode 
# from pyqrcode import * 
import datetime
import time
  
# # String which represent the QR code 
def generate_new_qr(teacher,password,subject):
    teacher="Pavlov Sergey Igorevich"
    password="qwerty123"
    subject="Python"

    dt = datetime.datetime.now() # datetime, из которой переводим в timestamp

    time_stamp=time.mktime(dt.timetuple())
    # мешаем добавляем к строке qr-code хэш времени и пароля
    s = teacher+subject+str(hash(str((time_stamp))+str(password)))
    # Generate QR code 
    url = pyqrcode.create(s) 
    
    # Create and save the png file naming "myqr.png" 
    url.svg("myqr.svg", scale = 8) 
    my_file = open("myqr.svg")
    svg_for_bd = my_file.read()
    my_file.close()
    big_code = pyqrcode.create('0987654321', error='L', version=27, mode='binary')
    return svg_for_bd
# whi
# nerate_new_qr('','','')
generate_new_qr('','','')