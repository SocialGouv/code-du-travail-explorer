import json
import logging
import os
import base64
import hashlib

from slugify import slugify

from search import settings
from search.indexing.strip_html import strip_html
from search.extraction.code_du_travail.cleaned_tags.data import CODE_DU_TRAVAIL_DICT
from search.extraction.fiches_ministere_travail.data import FICHES_MINISTERE_TRAVAIL
from search.extraction.fiches_service_public.data import FICHES_SERVICE_PUBLIC
from search.extraction.themes_front.data import THEMES

logger = settings.get_logger(__name__)
logger.setLevel(logging.INFO)

CDTN_DOCUMENTS = []

def flatten(item):
    if isinstance(item, list):
        return ", ".join(item)
    return item

def parse_hash_tags(tags):
    newTags = []
    for key, value in tags.items():
        if isinstance(value, list):
            for entry in value:
                newTags.append(key + ":" + (str(entry) or ""))
        else:
            newTags.append(key + ":" + (str(value) or ""))
    return newTags

def hasher(text):
    return ("-" + base64.urlsafe_b64encode(
      hashlib.sha1(text).digest()[:10]).decode()
    ) if text else ""

# make a slug from given text and add short hashed suffix from given seed if any
def make_slug(text, seed):
    return slugify(text + str(
      hasher(
        ((text + seed).encode('utf-8'))
      )
    ), to_lower=True)


def populate_cdtn_documents():
    with open(os.path.join(settings.BASE_DIR, 'dataset/kali/idcc-kali-ape.json')) as json_data:
        data = json.load(json_data)
        logger.info("Load %s documents from kali", len(data))
        for val in data:
            CDTN_DOCUMENTS.append({
                'source': 'kali',
                'id': val['cid'],
                'slug': slugify(val['titre'], to_lower=True),
                'title': val['titre'],
                'url': val['url'],
                'ape': " ".join(val.get('ape') or []),
                'idcc': val.get('idcc'),
            })

    with open(os.path.join(settings.BASE_DIR, 'dataset/idcc-tags.json')) as idcc_tags_data:
        tags_data = json.load(idcc_tags_data)
        with open(os.path.join(settings.BASE_DIR, 'dataset/idcc.json')) as json_data:
            data = json.load(json_data)
            logger.info("Load %s documents from idcc", len(data))
            for key, val in data.items():
                title = "IDCC " + key + " : " +  val
                tags = []
                if tags_data.get(key) and tags_data.get(key).get("tags"):
                    tags += parse_hash_tags(tags_data.get(key).get("tags"))

                CDTN_DOCUMENTS.append({
                    'source': 'idcc',
                    'id': key,
                    'slug': key,
                    'title': title,
                    'tags':tags,
                    'all_text': title
                })

    logger.info("Load %s documents from code-du-travail", len(CODE_DU_TRAVAIL_DICT))
    for val in CODE_DU_TRAVAIL_DICT.values():
        CDTN_DOCUMENTS.append({
            'source': 'code_du_travail',
            'text': val['bloc_textuel'],
            'slug': slugify(val['titre'], to_lower=True),
            'title': val['titre'],
            'html': val['html'],
            'path': val['path'],
            'themes': val['themes'],
            'date_debut': val['date_debut'],
            'date_fin': val['date_fin'],
            'url': val['url'],
        })

    logger.info("Load %s documents from service-public", len(FICHES_SERVICE_PUBLIC))
    for val in FICHES_SERVICE_PUBLIC:
        CDTN_DOCUMENTS.append({
            'source': 'fiches_service_public',
            'text': val['text'],
            'slug': slugify(val['title'], to_lower=True),
            'title': val['title'],
            'html': val["html"],
            'tags': val['tags'],
            'url': val['url'],
            'date': val.get('date'),
        })

    logger.info("Load %s documents from fiches-ministere-travail", len(FICHES_MINISTERE_TRAVAIL))
    for val in FICHES_MINISTERE_TRAVAIL:
        CDTN_DOCUMENTS.append({
            'source': 'fiches_ministere_travail',
            'slug': slugify(val['title'], to_lower=True),
            'text': val['text'],
            'anchor': val['anchor'],
            'html': val["html"],
            'title': val['title'],
            'url': val['url'],
            'date': val.get('date'),
        })

    for val in THEMES:
        CDTN_DOCUMENTS.append({
            'source': 'themes',
            'slug': val['slug'],
            'text': val['text'],
            'title': val['title'],
        })

    with open(os.path.join(settings.BASE_DIR, 'dataset/faq.json')) as json_data:
        data = json.load(json_data)
        logger.info("Load %s documents from faq", len(data))
        for val in data:
            faq_text = strip_html(val['reponse'])
            tags = parse_hash_tags(val.get("tags"))
            CDTN_DOCUMENTS.append({
                'source': 'faq',
                'slug': make_slug(val['question'], '-'.join(tags)),
                'text': faq_text,
                'html': val["reponse"],
                'title': val['question'],
                'tags': tags,
                'date': val.get('date'),
                'author':  val['source'] if 'source' in val else 'DIRRECTE',
            })

    with open(os.path.join(settings.BASE_DIR, 'dataset/faq-contributions.json')) as json_data:
        data = json.load(json_data)
        logger.info("Load %s documents from contributions", len(data))
        for val in data:
            faq_text = strip_html(val['reponse'])
            tags = parse_hash_tags(val.get("tags"))
            CDTN_DOCUMENTS.append({
                'source': 'faq',
                'slug': make_slug(val['question'], '-'.join(tags)),
                'text': faq_text,
                'html': val["reponse"],
                'title': val['question'],
                'tags': tags,
                'date': val.get('date_redaction'),
                'date_expiration': val.get('date_expiration'),
                'author': 'DIRRECTE',
            })
    with open(os.path.join(settings.BASE_DIR, 'dataset/faq-snippets.json')) as json_data:
        data = json.load(json_data)
        logger.info("Load %s documents from snippets", len(data))
        for val in data:
            faq_text = strip_html(val['reponse'])
            tags = parse_hash_tags(val.get("tags"))
            CDTN_DOCUMENTS.append({
                'source': 'snippet',
                'slug': slugify(val['question'], to_lower=True),
                'text': faq_text,
                'html': val["reponse"],
                'title': val['question'],
                'tags': tags,
                'date': val.get('date_redaction'),
                'references': val.get('references'),
                'date_expiration': val.get('date_expiration'),
                'author': val['redacteur'],
            })

    with open(os.path.join(settings.BASE_DIR, 'dataset/export-courriers.json')) as json_data:
        data = json.load(json_data)
        logger.info("Load %s documents from export-courriers.json", len(data))
        for val in data:
            tags = parse_hash_tags(val.get("tags"))
            CDTN_DOCUMENTS.append({
                'source': 'modeles_de_courriers',
                'title': val['titre'],
                'filename': val['filename'],
                'slug': slugify(val['titre'], to_lower=True),
                'text': ''.join(val['questions']),
                'html': val["html"],
                'tags': tags,
                'description': val.get('description'),
                'date': val.get('date_redaction'),
                'author':  val.get('redacteur'),
            })

    with open(os.path.join(settings.BASE_DIR, 'dataset/outils.json')) as json_data:
        data = json.load(json_data)
        logger.info("Load %s documents from outils.json", len(data))
        for val in data:
            CDTN_DOCUMENTS.append({
                'source': 'outils',
                'title': val['titre'],
                'slug': slugify(val['code'], to_lower=True),
                'text': ' '.join(val['questions']),
                'themes': val['themes'],
                'date': val.get('date'),
                'branche': val['branche'],
            })

populate_cdtn_documents()
