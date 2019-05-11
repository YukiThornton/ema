(ns ema-api.handler.example
  (:require [ataraxy.core :as ataraxy]
            [ataraxy.response :as response] 
            [integrant.core :as ig]))

(def sample-emas
  {:emas
   [{:id 1
     :user-id 1
     :type "wish"
     :status "open"
     :content
     {:text "Cras elementum at nulla sit amet lobortis. Praesent diam ligula, ultrices sed rutrum eu, iaculis id turpis. Phasellus interdum gravida odio, ut dapibus ante sodales quis. Nam vel suscipit leo. In odio quam, placerat sit amet lectus non, aliquam dignissim lectus. Vestibulum vehicula, magna bibendum consectetur ullamcorper, nibh ligula convallis dolor"}}
    {:id 2
     :user-id 1
     :type "wish"
     :status "open"
     :content
     {:text "Cras elementum tortor eu elementum commodo. Nam eget tellus purus. Donec id sem feugiat, sodales elit eget, rhoncus ipsum. Donec varius neque eu suscipit lacinia. Proin et lorem vehicula, imperdiet urna a, finibus dui."}}]})

(defmethod ig/init-key :ema-api.handler/emas [_ options]
  (fn [{[_] :ataraxy/result}]
    [::response/ok sample-emas]))


(defmethod ig/init-key :ema-api.handler/create-ema [_ options]
  (fn [{[_ body] :ataraxy/result}]
    [::response/created 1 {:result "ok"
                           :ema (body :params)}]))
