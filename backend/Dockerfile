FROM python:3.9-slim

WORKDIR /app

RUN pip install --upgrade pip

RUN apt-get update && apt-get install -y libpq-dev

RUN pip install gunicorn==20.1.0

COPY requirements.txt .

RUN pip install -r requirements.txt --no-cache-dir -v

COPY . .

CMD ["gunicorn", "--bind", "0.0.0.0:8000", "backend.wsgi"]

