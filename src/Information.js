import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showOrHideInfo } from './actions';
import { X, BookOpen, HelpCircle, Grid } from 'react-feather';


export default function Info() {
    const dispatch = useDispatch();
    const infoIsVisible = useSelector((state) => state && state.infoIsVisible);

    return (
        <>
            <div className="info-overlay" onClick={() => dispatch(showOrHideInfo(infoIsVisible))}></div>
            <div className="info-container">
                <X className="x" onClick={() => dispatch(showOrHideInfo(infoIsVisible))} />
                <h2>Information für Eltern</h2>
                <h4>Willkomen im Tierbuch! Diese audio-visuelle App richtet sich an sehr junge Kinder,
                    die mit dem visuellen Zeichensystem der Sprache noch keine Erfahrung gemacht haben.
                    In drei unterschiedlichen Aktivitäten können junge Nutzer*innen
                    Tiere und Tierlaute lernen. Dabei kommen sie zum ersten Mal in Berührung
                    mit Methoden der formalen Bildung — allerdings in einer thematisch
                    und visuell ansprechenden Umgebung.
                </h4>
                <div className="features-container">
                    <BookOpen />
                    <h4><span>Tiere Lernen:</span> Diese Aktivität stellt virtuelle
                    Lernkarten da. Das Kind kann eine beliebige Karte anklicken, wonach
                    sie sich "öffnet". Auf der geöffneten Karte ist eine größere Abbildung des
                    angeklickten Tieres zu sehen, sowie zwei Tasten. Wenn das Kind die Taste
                    mit der Personabbildung drückt, ist der Tiername zu hören. Drückt das Kind
                    auf die Taste mit dem Tier, hört es den Tierlaut. Das Kind kann die Karte
                    schließen und eine andere anklicken oder zwischen den Karten schalten.</h4>
                    <HelpCircle />
                    <h4><span>Quiz:</span> Das Quiz erinnert uns an eine Multiple-Choice-Aufgabe,
                    wie wir sie aus der formalen Bildung kennen. Im Zentum des Bildschirms erscheint
                    eine große Abbildung eines Tieres, zu dem eine passende Antwort gefunden werden
                    soll. Darunter sind drei Tastenpaare. Wie bei der
                    ersten Aktivität wird beim Anklicken der Taste mit der Personabbildung ein Tiername
                    abgeschpielt. Das Kind soll sich drei Audios anhören und ein Richtiges auswählen,
                    indem es eine entsprechende Daumen-Hoch-Taste drückt. Ist die Antwort richtig,
                    bekommt das Kind eine Sonne. Ist sie inkorrekt, wird ihm ein Wölkchen zugeteilt.
                    Jede Quiz-Runde besteht aus fünf Fragen. Die Fragen werden zufällig generiert,
                    sodass sich die Fragen von Runde zu Runde nicht wiederholen. Beim Klicken auf
                    das Tierbild wird der Tierlaut abgespielt.</h4>
                    <Grid />
                    <h4><span>Memory:</span> Das Spiel funktioniert wie ein gut bekanntes Memory.
                    Es gibt allerdings nicht nur die gewohnten Bildkarten, die links auf dem
                    Bildschirm zu sehen sind, sonder auch Lautkarten, die auf der rechten Bildschirmseite
                    zu finden sind. Das Ziel des Spiels besteht darin, vier passende Bild-Laut-Paare
                    zu finden. Für jedes entdecktes Paar bekommt das Kind ein kleines Geschenk.</h4>
                </div>
                <h4>Viel Spaß wünscht Ihrem Kind und Ihnen die Entwicklerin, Anna Roshchina.</h4>
                <h5>References: sounds of animals, clicking and magic sounds 
                    from www.zapsplat.com
                </h5>
            </div>
        </>
    );
}