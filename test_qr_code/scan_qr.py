import cv2
import numpy as np
import sys
import time

def scan_qr():
        # Display barcode and QR code location
    def display(im, bbox):
        n = len(bbox)
        for j in range(n):
            cv2.line(im, tuple(bbox[j][0]), tuple(bbox[ (j+1) % n][0]), (255,0,0), 3)
    
        # Display results
        cv2.imshow("Results", im)

    qrDecoder = cv2.QRCodeDetector()
    # detector = dlib.get_frontal_face_detector()
    cam = cv2.VideoCapture(0)
    color_green = (0,255,0)
    line_width = 3

    while(True):
        ret_val, inputImage = cam.read()

        rgb_image = cv2.cvtColor(inputImage, cv2.COLOR_BGR2RGB)
        data,bbox,rectifiedImage = qrDecoder.detectAndDecode(inputImage)
        #dets = detector(rgb_image)

        #for det in dets:

        #   cv2.rectangle(img,(det.left(), det.top()), (det.right(), det.bottom()), color_green, line_width)
        if len(data)>0:
            print("Decoded Data : {}".format(data))
            display(inputImage, bbox)
            rectifiedImage = np.uint8(rectifiedImage);
            cv2.imshow("Rectified QRCode", rectifiedImage);
            break
        else:
            # print("QR Code not detected")
            cv2.imshow("Results", inputImage)
        
        # cv2.imshow('my webcam', inputImage)

        if cv2.waitKey(1) == 27:
            cv2.destroyAllWindows()
            break  # esc to quit
    return data

print(scan_qr())
