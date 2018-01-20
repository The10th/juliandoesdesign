s3cmd -P put *.html s3://www.juliandoesui.com/
s3cmd -P put *.png s3://www.juliandoesui.com/
s3cmd -P put *.ico s3://www.juliandoesui.com/
s3cmd -P put cmb.html s3://www.juliandoesui.com/cmb/index.html
s3cmd -P put heap.html s3://www.juliandoesui.com/heap/index.html
s3cmd -P --recursive put web s3://www.juliandoesui.com/
