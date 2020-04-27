from flask import Flask, render_template, url_for, request, redirect
from flask_mail import Mail, Message
import csv
import datetime
app = Flask(__name__)


# vreme = datetime.datetime.now()
app.config['DEBUG'] = True
app.config['TESTING'] = False
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_USERNAME'] = 'nesafarm1@gmail.com'
app.config['MAIL_PASSWORD'] = 'mkok rbmc gmwm zeta'
app.config['MAIL_DEFAULT_SENDER'] = 'nesafarm1@gmail.com'
app.config['MAIL_MAX_EMAILS'] = None
app.config['MAIL_SUPPRESS_SEND'] = False
app.config['MAIL_ASCII_ATTACHMENTS'] = False

mail = Mail(app)


@app.route('/')
def my_home():
    return render_template('index.html')


def salji_mejl(data):
    vreme = datetime.datetime.now()
    email = data['email']
    subject = data['subject']
    message = data['message']
    time = vreme.strftime("%d-%m-%Y %H:%M:%S")
    msg = Message('Komentar sa Python sajta',
                  recipients=['nesafarm@iCloud.com'])
    msg.body = 'DETALJI: \nEmail: ' + email + '\nTema: ' + \
        subject + '\nPoruka: ' + message + '\nVreme: ' + time
    mail.send(msg)
    # return "poruka je poslata"


# with app.app_context():
#     salji_mejl()


@app.route('/<string:page_name>')
def html_page(page_name):
    return render_template(page_name)


def write_to_csv(data):
    with open('database.csv', mode='a', newline='') as database:
        vreme = datetime.datetime.now()
        email = data['email']
        subject = data['subject']
        message = data['message']
        time = vreme.strftime("%d-%m-%Y %H:%M:%S")
        csv_writer = csv.writer(database, delimiter=',',
                                quotechar='"', quoting=csv.QUOTE_MINIMAL)
        csv_writer.writerow([email, subject, message, time])


@app.route('/submit_form', methods=['POST', 'GET'])
def submit_form():
    if request.method == 'POST':
        try:
            data = request.form.to_dict()
            write_to_csv(data)
            with app.app_context():
                salji_mejl(data)
            email = (data['email'])
            email2 = email.split('@')[0]
            return render_template('ThankYou.html', email2=email2)
        except:
            return 'podaci nisu uneti u bazu'
    else:
        return 'nesto je poslo naopako'


if __name__ == '__main__':
    app.debug = True
    app.run()
